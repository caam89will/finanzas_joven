import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración para guardar archivos locales (Modo Offline)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BACKUP_FILE = path.join(__dirname, 'usuarios_offline.json');

dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Permite que tu web (puerto 5173) se comunique con este servidor
app.use(express.json());

// 1. Conexión a Base de Datos (MongoDB)
// IMPORTANTE: Reemplaza esta URL con la de tu MongoDB Atlas si lo subes a internet
const MONGO_URI = process.env.MONGO_URI;

console.log("⏳ Intentando conectar a MongoDB...");

mongoose.connect(MONGO_URI, {
  serverSelectionTimeoutMS: 60000, // Aumentamos a 60 segundos por la señal inestable
  family: 4 // Forzar IPv4 para evitar problemas de DNS
})
  .then(() => console.log('✅ Conectado a la Base de Datos exitosamente'))
  .catch(err => {
    console.error('❌ Error CRÍTICO de conexión:', err.message);
    console.log('--- POSIBLES CAUSAS ---');
    console.log('1. Tu internet bloquea la conexión (prueba compartir datos del celular).');
    console.log('2. Tu IP no está autorizada en MongoDB Atlas (Network Access).');
  });

// Eventos de conexión para monitoreo
mongoose.connection.on('error', err => console.error('⚠️ Error en la conexión:', err));
mongoose.connection.on('disconnected', () => console.log('⚠️ Desconectado de MongoDB'));

// 2. Definir el Modelo (Qué datos guardamos)
const SubscriberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  registeredAt: { type: Date, default: Date.now }
});

const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

// Ruta de prueba para verificar que el servidor corre
app.get('/', (req, res) => {
  res.send('✅ El servidor backend está funcionando correctamente.');
});

// 3. Ruta para recibir los datos desde la web
app.post('/api/register', async (req, res) => {
  try {
    const { name, email } = req.body;

    // --- INTENTO 1: Guardar en Nube (MongoDB) ---
    if (mongoose.connection.readyState === 1) {
      const existingUser = await Subscriber.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Este correo ya está registrado.' });
      }

      const newSubscriber = new Subscriber({ name, email });
      await newSubscriber.save();
      
      console.log(`✅ [NUBE] Nuevo lead capturado: ${email}`);
      return res.status(201).json({ message: '¡Registro exitoso en la Nube!' });
    }
    
    // Si no hay conexión, lanzamos error para activar el modo offline
    throw new Error("Sin conexión a MongoDB");

  } catch (error) {
    console.warn("⚠️ Falló la nube. Activando modo OFFLINE...");
    
    // --- INTENTO 2: Guardar en Archivo Local (Respaldo) ---
    try {
      const { name, email } = req.body;
      let currentData = [];
      
      // Leer archivo existente si hay
      if (fs.existsSync(BACKUP_FILE)) {
        const fileContent = fs.readFileSync(BACKUP_FILE, 'utf-8');
        currentData = JSON.parse(fileContent || '[]');
      }

      // Validar duplicados localmente
      if (currentData.some(u => u.email === email)) {
        return res.status(400).json({ message: 'Este correo ya está registrado (Local).' });
      }

      // Guardar nuevo dato
      const newSub = { name, email, registeredAt: new Date(), source: 'offline' };
      currentData.push(newSub);
      
      fs.writeFileSync(BACKUP_FILE, JSON.stringify(currentData, null, 2));
      
      console.log(`Tb [LOCAL] Lead guardado en respaldo: ${email}`);
      return res.status(201).json({ message: '¡Registro guardado en MODO OFFLINE (Sin internet)!' });

    } catch (fileError) {
      console.error("❌ Error fatal (ni nube ni local):", fileError);
      return res.status(500).json({ message: 'Error al guardar', error: fileError.message });
    }
  }
});

// 4. Ruta para ver los suscriptores (Admin)
app.get('/api/subscribers', async (req, res) => {
  try {
    let subscribers = [];
    
    // Intentar traer de Mongo
    if (mongoose.connection.readyState === 1) {
      subscribers = await Subscriber.find().sort({ registeredAt: -1 });
    }

    // Traer también los locales
    if (fs.existsSync(BACKUP_FILE)) {
      const localData = JSON.parse(fs.readFileSync(BACKUP_FILE, 'utf-8'));
      // Combinar y marcar los locales
      const localFormatted = localData.map(u => ({...u, _id: 'local', isOffline: true}));
      subscribers = [...subscribers, ...localFormatted];
    }

    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener suscriptores', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend listo en http://localhost:${PORT}`);
});