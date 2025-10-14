<?php
include 'conexion.php'; // Incluye el archivo de conexión a la base de datos

$username = 'admin';  // Nombre de usuario para el administrador
$password = password_hash('1234', PASSWORD_DEFAULT);  // Contraseña cifrada
$email = 'admin@correo.com';  // Correo electrónico del administrador

// Consulta para insertar el usuario administrador en la tabla 'usuarios'
$stmt = $conn->prepare("INSERT INTO usuarios (username, password, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $password, $email);
$stmt->execute();

// Confirmación de que el usuario fue creado
echo "Usuario administrador creado correctamente";
?>
