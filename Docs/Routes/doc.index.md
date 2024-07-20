# Documentación de Rutas Principales

## Descripción

Este módulo define las rutas principales de la aplicación utilizando Express. Combina las rutas de autenticación y productos, y las agrega a una instancia de `Router`.

## Importaciones

```typescript
import { Router } from "express";
import AuthRoutes from "./Auth";
import ProductRoutes from "./Product";
```

- `Router`: Componente de Express para manejar rutas.
- `AuthRoutes`: Módulo que define las rutas de autenticación.
- `ProductRoutes`: Módulo que define las rutas de productos.

## Definición de la Función Principal

```typescript
export default () => {
  const app = Router();
  AuthRoutes(app);
  ProductRoutes(app);

  return app;
};
```

La función principal exportada realiza las siguientes acciones:

1. **Crea una instancia de `Router`:**
    ```typescript
    const app = Router();
    ```

2. **Agrega las rutas de autenticación a la instancia del `Router`:**
    ```typescript
    AuthRoutes(app);
    ```

3. **Agrega las rutas de productos a la instancia del `Router`:**
    ```typescript
    ProductRoutes(app);
    ```

4. **Retorna la instancia del `Router` con todas las rutas definidas:**
    ```typescript
    return app;
    ```

## Uso

Este módulo se usa para centralizar todas las rutas de la aplicación en una sola instancia de `Router`. Se puede importar en el archivo principal de la aplicación y utilizarlo como middleware.

### Ejemplo

```typescript
import express from "express";
import mainRoutes from "./routes";

const app = express();
app.use("/api", mainRoutes());

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
```

En este ejemplo, todas las rutas definidas en los módulos `AuthRoutes` y `ProductRoutes` estarán disponibles bajo el path `/api`.

## Rutas Incluidas

### Rutas de Autenticación

Las rutas de autenticación se importan del módulo `./Auth` y se agregan a la instancia de `Router`.

### Rutas de Productos

Las rutas de productos se importan del módulo `./Product` y se agregan a la instancia de `Router`.