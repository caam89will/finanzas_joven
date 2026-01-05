import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Permite que tu web (puerto 5173) se comunique con este servidor
app.use(express.json());

// 1. Conexión a Base de Datos (MongoDB)
// IMPORTANTE: Reemplaza esta URL con la de tu MongoDB Atlas si lo subes a internet
// Opción 1: Local (Asegúrate de tener MongoDB Community Server instalado y corriendo)
const MONGO_URI = 'mongodb://127.0.0.1:27017/finanzas_joven';
// Opción 2: Nube (MongoDB Atlas) - Descomenta la siguiente línea y pon tu contraseña
// const MONGO_URI = 'mongodb+srv://TU_USUARIO:TU_PASSWORD@cluster0.xxxxx.mongodb.net/finanzas_joven';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Conectado a la Base de Datos'))
  .catch(err => {
    console.error('❌ Error de conexión a MongoDB:', err.message);
    console.log('💡 Si estás en local: ¿Tienes instalado y encendido MongoDB Community Server?');
    console.log('💡 Si usas Atlas: ¿Pusiste bien tu usuario y contraseña?');
  });

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
    
    // Validar si ya existe
    const existingUser = await Subscriber.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Este correo ya está registrado.' });
    }

    const newSubscriber = new Subscriber({ name, email });
    await newSubscriber.save();
    
    console.log(`Nuevo lead capturado: ${email}`);
    res.status(201).json({ message: '¡Registro exitoso!' });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar', error });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend listo en http://localhost:${PORT}`);
});