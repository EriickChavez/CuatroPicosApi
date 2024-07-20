# Documentación de la Clase Api

## Descripción

Esta clase define una API utilizando Express. Configura middlewares, carga rutas y maneja errores de rutas no encontradas. Finalmente, inicia el servidor en el puerto especificado.

## Importaciones

```javascript
import express from "express";
import { middleware } from "@/Middleware";
import { ENV } from "@/Config";
import Routes from "@/Routes";
```

- `express`: Framework para construir aplicaciones web y APIs.
- `middleware`: Funciones middleware personalizadas para configurar la aplicación.
- `ENV`: Configuración de variables de entorno, como el puerto del servidor.
- `Routes`: Archivo que define todas las rutas de la aplicación.

## Clase Api

```javascript
class Api {
  private api: express.Application = express();

  constructor() {
    Promise.resolve(this.init()).then(() => this.start());
  }

  private async init() {
    this.initializeMiddlewares();
    this.loadRoutes();
    this.routeNotFound();
  }

  private routeNotFound() {
    this.api.use((req, res, next) => {
      console.warn(`404 - Not Found: ${ENV.baseUrl}${req.originalUrl}`);
      res.status(404).json({ message: "Not Found" });
    });
  }

  private loadRoutes() {
    this.api.use("/", Routes());
  }

  private initializeMiddlewares() {
    middleware(this.api);
  }

  public start() {
    this.api
      .listen(ENV.PORT, () => {
        console.info("Server running at PORT: ", ENV.PORT);
      })
      .on("error", (error) => {
        // gracefully handle error
        throw new Error(error.message);
      });
  }
}

export default Api;
```

### Propiedades

- `api`: Instancia de la aplicación Express.

### Métodos

#### `constructor()`

El constructor inicia la inicialización de la API y luego la arranca.

#### `init()`

Método asíncrono que inicializa los middlewares, carga las rutas y maneja las rutas no encontradas.

#### `initializeMiddlewares()`

Inicializa los middlewares personalizados en la aplicación Express.

#### `loadRoutes()`

Carga las rutas definidas en el módulo `Routes` en la aplicación Express.

#### `routeNotFound()`

Maneja las rutas no encontradas (404). Registra un mensaje de advertencia y responde con un estado 404 y un mensaje de "Not Found".

#### `start()`

Inicia el servidor en el puerto definido en las variables de entorno. Maneja errores de arranque del servidor.

## Uso

Esta clase se usa para iniciar el servidor Express con las configuraciones necesarias. A continuación se muestra un ejemplo de cómo se puede utilizar:

### Ejemplo

```javascript
import Api from "@/Api";

const apiInstance = new Api();
```

Este ejemplo crea una nueva instancia de la clase `Api`, lo que inicia la configuración y el arranque del servidor Express.

## Middleware

El archivo `middleware` debe exportar una función que acepte una instancia de Express y aplique los middlewares necesarios.

### Ejemplo de `middleware.js`

```javascript
export const middleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // Otros middlewares personalizados
};
```

## Configuración

El archivo `ENV` debe exportar un objeto con las variables de entorno necesarias, como el puerto del servidor.

### Ejemplo de `Config.js`

```javascript
export const ENV = {
  PORT: process.env.PORT || 3000,
  baseUrl: process.env.BASE_URL || "http://localhost"
};
```

## Rutas

El archivo `Routes` debe exportar una función que registre todas las rutas en la instancia de Express.

### Ejemplo de `Routes.js`

```javascript
import { Router } from "express";
import AuthRoutes from "./Auth";
import ProductRoutes from "./Product";
import CategoryRoutes from "./Category";

export default () => {
  const app = Router();

  AuthRoutes(app);
  ProductRoutes(app);
  CategoryRoutes(app);

  return app;
};
```

Este ejemplo combina las rutas de autenticación, productos y categorías en una sola instancia de `Router` y las exporta para su uso en la clase `Api`.