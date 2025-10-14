<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Registro</title>
  <link rel="stylesheet" href="auth.css">
</head>
<body>
  <main class="auth-container">
    <form action="procesar_registro.php" method="POST" class="auth-form">
      <h2>Registro</h2>
      <div class="form-group">
        <label for="username">Nombre de usuario</label>
        <input type="text" name="username" id="username" required>
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" name="email" id="email" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" name="password" id="password" required minlength="4">
      </div>
      <button type="submit" class="btn">Registrarse</button>
      <p class="auth-link">¿Ya tienes cuenta? <a href="login.php">Inicia sesión</a></p>
    </form>
  </main>
</body>
</html>
