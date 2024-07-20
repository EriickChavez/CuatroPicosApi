# Documentación de CategoryRoutes

## Descripción

Este módulo define las rutas relacionadas con el manejo de categorías utilizando Express. Incluye rutas para obtener, agregar, actualizar y eliminar categorías a través de un controlador de categorías.

## Importaciones

```typescript
import { SUCCESS } from "@/Constants/message";
import CategoryController from "@/Controller/CategoryController";
import { Router, Request, Response } from "express";
```

- `SUCCESS`: Constante que contiene mensajes de éxito.
- `CategoryController`: Controlador con las funciones necesarias para manejar categorías.
- `Router`, `Request`, `Response`: Componentes de Express para manejar rutas y solicitudes/respuestas HTTP.

## Definición de la Ruta

```typescript
const route = Router();
```

Crea una nueva instancia de `Router` para definir las rutas específicas de categorías.

## Función Principal

```typescript
const CategoryRoutes = (app: Router) => {
    app.use("/category", route);
```

La función principal `CategoryRoutes` toma un objeto `Router` (`app`) y define todas las rutas bajo el path `/category`.

### Rutas Definidas

#### Obtener Todas las Categorías

```typescript
route.get("/", async (req: Request, res: Response) => {
    try {
        const categories = await CategoryController.get();
        return res.status(200).json({ data: categories });
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
});
```

- **Método**: `GET`
- **URL**: `/category/`
- **Descripción**: Obtiene todas las categorías.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos de las categorías.
- **Respuesta con Error**: Estado 500 y mensaje de error.

#### Obtener una Categoría por ID

```typescript
route.get("/:id", async (req: Request, res: Response) => {
    try {
        const category = await CategoryController.getById(req.params.id);
        return res.status(200).json({ data: category });
    } catch (err: any) {
        return res.status(err.status).json({ message: err.message });
    }
});
```

- **Método**: `GET`
- **URL**: `/category/:id`
- **Descripción**: Obtiene una categoría específica por su ID.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos de la categoría.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

#### Agregar una Nueva Categoría

```typescript
route.post("/add", async (req: Request, res: Response) => {
    try {
        const category = await CategoryController.add(req.body);
        return res.status(200).json({ data: category });
    } catch (err: any) {
        return res.status(err.status).json({ message: err.message });
    }
});
```

- **Método**: `POST`
- **URL**: `/category/add`
- **Descripción**: Agrega una nueva categoría.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos de la categoría agregada.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

#### Actualizar una Categoría

```typescript
route.put("/update", async (req: Request, res: Response) => {
    try {
        const category = await CategoryController.update(
            req.body.id,
            req.body.category
        );
        return res.status(200).json({ data: category });
    } catch (err: any) {
        return res.status(err.status).json({ message: err.message });
    }
});
```

- **Método**: `PUT`
- **URL**: `/category/update`
- **Descripción**: Actualiza una categoría existente.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos de la categoría actualizada.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

#### Eliminar una Categoría

```typescript
route.delete("/delete", async (req: Request, res: Response) => {
    try {
        await CategoryController.delete(req.body.id);
        return res.status(200).json({ message: SUCCESS.DELETED });
    } catch (err: any) {
        return res.status(err.status).json({ message: err.message });
    }
});
```

- **Método**: `DELETE`
- **URL**: `/category/delete`
- **Descripción**: Elimina una categoría existente.
- **Respuesta Exitosa**: Estado 200 y mensaje de éxito.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

## Exportación del Módulo

```typescript
export default CategoryRoutes;
```

Exporta la función `CategoryRoutes` para su uso en otras partes de la aplicación.