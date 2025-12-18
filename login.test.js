/**
 * @jest-environment jsdom
 */

describe('login.html', () => {
  const html = `<!DOCTYPE html>
<html lang="es">
<head></head>
<body>
    <form class="login-box">
        <h2>Login</h2>
        <label for="usuario">Usuario</label>
        <input type="text" id="usuario" name="usuario" required>
        <label for="contrasena">Contraseña</label>
        <input type="password" id="contrasena" name="contrasena" required>
        <button type="submit">Login</button>
    </form>
</body>
</html>`;

  beforeEach(() => {
    document.body.innerHTML = html;
  });

  test('debe renderizar el formulario de login', () => {
    expect(document.querySelector('.login-box')).not.toBeNull();
    expect(document.querySelector('h2').textContent).toBe('Login');
  });

  test('debe tener campos de usuario y contraseña', () => {
    expect(document.getElementById('usuario')).not.toBeNull();
    expect(document.getElementById('contrasena')).not.toBeNull();
  });

  test('el botón debe decir Login', () => {
    const button = document.querySelector('button[type="submit"]');
    expect(button).not.toBeNull();
    expect(button.textContent).toBe('Login');
  });

  test('los campos deben ser requeridos', () => {
    expect(document.getElementById('usuario').required).toBe(true);
    expect(document.getElementById('contrasena').required).toBe(true);
  });
});
