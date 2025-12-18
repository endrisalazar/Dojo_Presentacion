// login.js
// Script para funcionalidad básica del formulario de login

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.login-box');
  const errorDiv = document.getElementById('login-error');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    if (!usuario || !contrasena) {
      errorDiv.textContent = 'Por Favor complete todos los campos (no se permiten espacios vacíos).';
      errorDiv.style.display = 'block';
      return;
    }
    errorDiv.style.display = 'none';
    // Aquí puedes agregar la lógica de autenticación
    alert(`Bienvenido, ${usuario}!`);
  });
});
