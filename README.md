# Dojo_Presentacion


## Descripción

Este proyecto contiene una pantalla de login moderna y responsiva, con los siguientes elementos y características:

- **login.html**: Formulario de login con campos para usuario y contraseña, ambos usando placeholders. Incluye validación personalizada en JavaScript.
- **login.css**: Estilos personalizados con paleta de colores corporativos (azules, gris/plata, granate y rojo), centrado de la caja y campos, y avatar SVG como ícono.
- **Avatar**: Ícono SVG centrado en la parte superior de la caja de login.
- **Inputs y botón**: Centrado visual, mismo ancho, texto alineado a la izquierda.
- **Mensaje de error**: Aparece debajo del botón "Ingresar", centrado, en rojo y negrita, cuando los campos están vacíos o contienen solo espacios. El texto es: "Por Favor complete todos los campos (no se permiten espacios vacíos)".
- **Pruebas Jest**: Archivos `login.test.js` y `login-css.test.js` con pruebas unitarias usando entorno jsdom.

## Paleta de colores
- Azul oscuro: `#006690`
- Azul aún más oscuro: `#003057`
- Gris/Plata: `#c2bbb5`
- Granate: `#934f46`
- Rojo: `#f20008`

## Estructura de archivos
- `login.html`: Estructura del formulario de login.
- `login.css`: Estilos externos.
- `login.js`: Validación y funcionalidad del formulario.
- `login.test.js` y `login-css.test.js`: Pruebas unitarias Jest.

## Cómo ejecutar las pruebas
1. Asegúrate de tener Node.js y npm instalados.
2. Instala Jest si no lo tienes:
   ```sh
   npm install --save-dev jest
   ```
3. Ejecuta las pruebas:
   ```sh
   npx jest login.test.js
   npx jest login-css.test.js
   ```

## Personalización
Puedes cambiar el ícono del avatar, los colores, los textos o la lógica de validación fácilmente editando los archivos correspondientes.

## Paleta de colores
- Azul oscuro: `#006690`
- Azul aún más oscuro: `#003057`
- Gris/Plata: `#c2bbb5`
- Granate: `#934f46`
- Rojo: `#f20008`

## Estructura de archivos
- `login.html`: Estructura del formulario de login.
- `login.css`: Estilos externos.
- `login.test.js`: Pruebas unitarias Jest.

## Cómo ejecutar las pruebas
1. Asegúrate de tener Node.js y npm instalados.
2. Instala Jest si no lo tienes:
   ```sh
   npm install --save-dev jest
   ```
3. Ejecuta las pruebas:
   ```sh
   npx jest login.test.js
   ```

## Personalización
Puedes cambiar el ícono del avatar, los colores o los textos fácilmente editando los archivos correspondientes.
