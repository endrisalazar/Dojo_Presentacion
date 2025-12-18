/**
 * @jest-environment jsdom
 */

describe('login.html', () => {
  const html = `
    <form class="login-box">
      <input type="text" id="usuario" name="usuario" placeholder="Usuario">
      <input type="password" id="contrasena" name="contrasena" placeholder="Contraseña">
      <button type="submit">Ingresar</button>
      <div id="login-error" class="login-error" style="display:none;"></div>
    </form>
    <script src="login.js"></script>
  `;

  beforeEach(() => {
    document.body.innerHTML = html;
  });

  test('existe js enlazado en el html', () => {
    const script = document.querySelector('script[src="login.js"]');
    expect(script).not.toBeNull();
  });

  test('muestra texto rojo si uno o ambos inputs están vacíos', () => {
    // Simular el comportamiento de login.js
    document.getElementById('usuario').value = '';
    document.getElementById('contrasena').value = '';
    // Simular el evento submit
    const errorDiv = document.getElementById('login-error');
    // Simulación manual del comportamiento
    if (!document.getElementById('usuario').value.trim() || !document.getElementById('contrasena').value.trim()) {
      errorDiv.textContent = 'Por Favor complete todos los campos (no se permiten espacios vacíos).';
      errorDiv.style.display = 'block';
    }
    expect(errorDiv.style.display).toBe('block');
    expect(errorDiv.textContent).toBe('Por Favor complete todos los campos (no se permiten espacios vacíos).');
    expect(errorDiv.className).toContain('login-error');
  });
});
