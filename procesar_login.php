<?php
session_start();
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST["username"]);
    $password = $_POST["password"];

    // Buscar por username o email
    $stmt = $conn->prepare("SELECT id, username, password FROM usuarios WHERE username = ? OR email = ?");
    $stmt->bind_param("ss", $username, $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($id, $nombre_usuario, $hash);
        $stmt->fetch();

        if (password_verify($password, $hash)) {
            $_SESSION["usuario_id"] = $id;
            $_SESSION["username"] = $nombre_usuario;
            echo "Inicio de sesión exitoso. Bienvenido $nombre_usuario";
            // Redirigir a página de usuario si deseas
            // header("Location: dashboard.php");
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Usuario no encontrado.";
    }

    $stmt->close();
    $conn->close();
}
