<?php
session_start();
if (!isset($_SESSION['usuario_id'])) {
    header("Location: login.html");
    exit;
}

if ($_FILES["video"]["error"] == 0) {
    $ruta = "videos/ultimo.mp4";
    move_uploaded_file($_FILES["video"]["tmp_name"], $ruta);
    echo "Video subido exitosamente. <a href='panel.php'>Volver</a>";
} else {
    echo "Error al subir el video.";
}
?>

