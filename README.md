# Dojo_Presentacion

## Descripción

Este proyecto contiene una pantalla de login moderna y responsiva, con los siguientes elementos y características:

- **login.html**: Formulario de login con campos para usuario y contraseña, ambos usando placeholders.
- **login.css**: Estilos personalizados con paleta de colores corporativos (azules, gris/plata, granate y rojo), centrado de la caja y campos, y avatar SVG como ícono.
- **Avatar**: Ícono SVG centrado en la parte superior de la caja de login.
- **Inputs y botón**: Centrado visual, mismo ancho, texto alineado a la izquierda.
- **Pruebas Jest**: Archivo `login.test.js` con pruebas unitarias usando entorno jsdom.

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
