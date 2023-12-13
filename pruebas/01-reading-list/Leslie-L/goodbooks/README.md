# GoodBooks

Goodbooks es  una aplicación web que permita a los usuarios ver los libros disponibles y crear una lista de lectura.

## Link del proyecto

https://adorable-piroshki-cc3799.netlify.app/

## Funcionalidad
- Visualización de Libros Disponibles: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.

- Creación de Lista de Lectura: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

- Filtrado de Libros por Género: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

- Sincronización de Estado: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

- Persistencia de Datos: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

- Sincronización entre pestañas: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.
## Tecnologías Utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)

## Configuración del Proyecto

### Requisitos Previos

- Node.js (v14.x o superior)
- npm o yarn

### Pasos para la Instalación

1. Clona el repositorio: `git clone https://github.com/Leslie-L/pruebas-tecnicas/tree/main/pruebas/01-reading-list/Leslie-L/goodbooks`
2. Navega al directorio del proyecto: `cd goodbooks`
3. Instala las dependencias: `npm install` o `yarn`

## Uso



```bash
# Ejecutar en modo de desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar los test
npm run test
