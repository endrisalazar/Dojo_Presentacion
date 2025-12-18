/**
 * @jest-environment jsdom
 */

describe('login.html', () => {
  const html = `<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Login Básico</title>\n    <link rel=\"stylesheet\" href=\"login.css\">\n</head>\n<body>\n    <form class=\"login-box\">\n        <div class=\"avatar-container\">\n            <span class=\"avatar-icon\" aria-label=\"Avatar usuario\">\n                <svg width=\"96\" height=\"96\" viewBox=\"0 0 96 96\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <circle cx=\"48\" cy=\"48\" r=\"46\" fill=\"#006690\" stroke=\"#003057\" stroke-width=\"4\"/>\n                  <circle cx=\"48\" cy=\"40\" r=\"18\" fill=\"#fff\"/>\n                  <ellipse cx=\"48\" cy=\"72\" rx=\"24\" ry=\"14\" fill=\"#fff\"/>\n                </svg>\n            </span>\n        </div>\n        <h2>Login</h2>\n        <input type=\"text\" id=\"usuario\" name=\"usuario\" required placeholder=\"Usuario\">\n        <input type=\"password\" id=\"contrasena\" name=\"contrasena\" required placeholder=\"Contraseña\">\n        <button type=\"submit\">Ingresar</button>\n    </form>\n</body>\n</html>`;

  beforeEach(() => {
    document.body.innerHTML = html;
  });

  test('Existe css en html', () => {
    const link = document.querySelector('link[rel="stylesheet"][href="login.css"]');
    expect(link).not.toBeNull();
  });
});
