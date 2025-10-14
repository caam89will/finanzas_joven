<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

    // Validar duplicados
    $check = $conn->prepare("SELECT id FROM usuarios WHERE username = ? OR email = ?");
    $check->bind_param("ss", $username, $email);
    $check->execute();
    $check->store_result();

    if ($check->num_rows > 0) {
        echo "El usuario o correo ya está registrado.";
    } else {
        $stmt = $conn->prepare("INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $password);
        if ($stmt->execute()) {
            echo "Registro exitoso. <a href='login.html'>Iniciar sesión</a>";
        } else {
            echo "Error en el registro.";
        }
    }

    $check->close();
    $conn->close();
}
?>
