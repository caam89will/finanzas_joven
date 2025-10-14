<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
    $comentario = mysqli_real_escape_string($conexion, $_POST['comentario']);
    $fecha = date("Y-m-d H:i:s");

    $sql = "INSERT INTO comentarios (nombre, comentario, fecha) VALUES ('$nombre', '$comentario', '$fecha')";
    mysqli_query($conexion, $sql);
}

header("Location: blog.html");
exit();
?>
