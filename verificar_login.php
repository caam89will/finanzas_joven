<?php
session_start();
include 'conexion.php';

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM usuarios WHERE username=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
    $_SESSION['usuario_id'] = $user['id'];
    $_SESSION['username'] = $user['username'];

    $ip = $_SERVER['REMOTE_ADDR'];
    $fecha = date('Y-m-d H:i:s');
    $log = $conn->prepare("INSERT INTO log_visitas (usuario_id, ip, fecha) VALUES (?, ?, ?)");
    $log->bind_param("iss", $user['id'], $ip, $fecha);
    $log->execute();

    header("Location: panel.php");
} else {
    echo "Credenciales incorrectas.";
}
?>
