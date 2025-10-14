<?php
session_start();
if (!isset($_SESSION['usuario_id'])) {
    header("Location: login.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Panel de Control</title>
</head>
<body>
  <h2>Bienvenido, <?php echo $_SESSION['username']; ?></h2>
  <a href="logout.php">Cerrar sesión</a>

  <h3>Subir Video</h3>
  <form action="subir_video.php" method="post" enctype="multipart/form-data">
    <input type="file" name="video" accept="video/mp4" required><br><br>
    <input type="submit" value="Subir Video">
  </form>

  <h3>Último Video Subido</h3>
  <?php
  if (file_exists("videos/ultimo.mp4")) {
      echo '<video width="640" height="360" controls>
              <source src="videos/ultimo.mp4" type="video/mp4">
              Tu navegador no soporta video HTML5.
            </video>';
  } else {
      echo "Aún no hay videos subidos.";
  }
  ?>
</body>
</html>
