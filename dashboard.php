<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php"); // Si el usuario no está logueado, redirige a login
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panel de usuario - Finanzas Jóvenes</title>
  <link rel="stylesheet" href="login.css">
</head>
<body>

  <main class="container">
    <h2>Bienvenido, <?php echo $_SESSION['username']; ?>!</h2>
    <p>Este es tu panel de usuario.</p>
    <a href="logout.php">Cerrar sesión</a>
  </main>

</body>
</html>
