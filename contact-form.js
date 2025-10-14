document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación personalizada
    if (this.checkValidity()) {
      // Simular envío (reemplazar con fetch() real)
      document.getElementById('confirmationMessage').innerHTML = `
        <p>✅ Mensaje enviado con éxito. ¡Gracias por contactarnos!</p>
      `;
      this.reset();
    }
  });