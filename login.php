<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Iniciar Sesión</title>
  <link rel="stylesheet" href="auth.css">
</head>
<body>
  <main class="auth-container">
    <form action="procesar_login.php" method="POST" class="auth-form">
      <h2>Iniciar Sesión</h2>
      <div class="form-group">
        <label for="username">Usuario</label>
        <input type="text" name="username" id="username" required autocomplete="username">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" name="password" id="password" required autocomplete="current-password">
      </div>
      <button type="submit" class="btn">Ingresar</button>
      <p class="auth-link">¿No tienes cuenta? <a href="registro.php">Regístrate</a></p>
    </form>
  </main>
</body>
</html>
