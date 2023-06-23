HOUSE OF DEV - BACKEND

DEPENDECIAS:

- bcrypt
- cors
- express
- jsonwebtoken
- latest
- mysql2
- nodemon
- pg
- pg-hstore
- psql
- sequelize
- sequelize-cli
- dotenv

INSTALACION:

- Clonar el repositorio
- En la terminal navega hasta el directorio raiz
- Ejecuta "npm i" para instalar las dependecias
- Asegurar tener configurado un archivo .env con los datos correspondientes
- inicia el servidor con "npm start"

MODELOS DE DATOS:

- PROPERTIES: muestra las diferentes caracteristicas de las propiedades
- CATEGORIES: muestras las categorias por la que se clasifica las propiedades
- VISITS: muetra las diferentes acciones que puede realizar quien visite la web
- FAVORITES: muestra como un cliente puede agregar una propiedad a su lista de favoritos
- USERS: Almacena datos de los usuarios registrados

RUTAS:
-ADMIN: Permite realizar diferentes gestiones como agregar, editar o eliminar una propiedad.
-VISITS: Permite relaizar diferentes gestiones como registrarse, editar su usuario y agendar una cita
-PROPERTIS: Ofrece diferentes funcionalidades de las propiedades
-USERS: Permite registrarse, iniciar sesion y cerrar sesion
