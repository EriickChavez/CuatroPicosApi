# Documentación de ProductRoutes

## Descripción

Este módulo define las rutas relacionadas con el manejo de productos utilizando Express. Incluye rutas para obtener, agregar, actualizar y eliminar productos a través de un controlador de productos.

## Importaciones

```typescript
import { SUCCESS } from "@/Constants/message";
import ProductController from "@/Controller/ProductController";
import { Router, Request, Response } from "express";
```

- `SUCCESS`: Constante que contiene mensajes de éxito.
- `ProductController`: Controlador con las funciones necesarias para manejar productos.
- `Router`, `Request`, `Response`: Componentes de Express para manejar rutas y solicitudes/respuestas HTTP.

## Definición de la Ruta

```typescript
const route = Router();
```

Crea una nueva instancia de `Router` para definir las rutas específicas de productos.

## Función Principal

```typescript
const ProductRoutes = (app: Router) => {
    app.use("/product", route);
```

La función principal `ProductRoutes` toma un objeto `Router` (`app`) y define todas las rutas bajo el path `/product`.

### Rutas Definidas

#### Obtener Todos los Productos

```typescript
route.get("/", async (req: Request, res: Response) => {
    try {
        const products = await ProductController.get();
        return res.status(200).json({ data: products });
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
});
```

- **Método**: `GET`
- **URL**: `/product/`
- **Descripción**: Obtiene todos los productos.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos de los productos.
- **Respuesta con Error**: Estado 500 y mensaje de error.

#### Obtener un Producto por ID

```typescript
route.get("/:id", async (req: Request, res: Response) => {
    try {
        const product = await ProductController.getById(req.params.id);
        return res.status(200).json({ data: product });
    } catch (err: any) {
        return res.status(err.status).json({ message: err.message });
    }
});
```

- **Método**: `GET`
- **URL**: `/product/:id`
- **Descripción**: Obtiene un producto específico por su ID.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos del producto.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

#### Agregar un Nuevo Producto

```typescript
route.post("/add", async (req: Request, res: Response) => {
    try {
        const product = await ProductController.add(req.body.product);
        return res.status(200).json({ data: product });
    } catch (err: any) {
        return res.status(err.status).json({ message: err.message });
    }
});
```

- **Método**: `POST`
- **URL**: `/product/add`
- **Descripción**: Agrega un nuevo producto.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos del producto agregado.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

#### Actualizar un Producto

```typescript
route.put("/update", async (req: Request, res: Response) => {
    try {
        const product = await ProductController.update(req.body.id, req.body.product);
        return res.status(200).json({ data: product });
    } catch (err: any) {
        return res.status(err.status).json({ message: err.message });
    }
});
```

- **Método**: `PUT`
- **URL**: `/product/update`
- **Descripción**: Actualiza un producto existente.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos del producto actualizado.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

#### Eliminar un Producto

```typescript
route.delete("/delete", async (req: Request, res: Response) => {
    try {
        await ProductController.delete(req.body.id);
        return res.status(200).json({ message: SUCCESS.DELETED });
    } catch (err: any) {
        return res.status(err.status).json({ message: err.message });
    }
});
```

- **Método**: `DELETE`
- **URL**: `/product/delete`
- **Descripción**: Elimina un producto existente.
- **Respuesta Exitosa**: Estado 200 y mensaje de éxito.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

## Exportación del Módulo

```typescript
export default ProductRoutes;
```

Exporta la función `ProductRoutes` para su uso en otras partes de la aplicación.