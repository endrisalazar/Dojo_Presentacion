// login.js
// Script para funcionalidad básica del formulario de login

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.login-box');
  const errorDiv = document.getElementById('login-error');
  if (!form) return;

  // Lista de usuarios y contraseñas válidas
  const usuarios = {
    'Admin': '1234',
    'Ginett': '2345',
    'Oscar': '3456',
    'Cristian': '4567',
    'Luis': '5678',
    'Felipe': '6789'
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    if (!usuario || !contrasena) {
      errorDiv.textContent = 'Por Favor complete todos los campos (no se permiten espacios vacíos).';
      errorDiv.style.display = 'block';
      return;
    }

    if (usuarios[usuario] && usuarios[usuario] === contrasena) {
      errorDiv.textContent = 'Login Exitoso';
      errorDiv.style.display = 'block';
      errorDiv.style.color = '#28a745'; // verde
    } else {
      errorDiv.textContent = 'Usuario o contraseña incorrectos.';
      errorDiv.style.display = 'block';
      errorDiv.style.color = '#f20008'; // rojo
    }
  });
});
