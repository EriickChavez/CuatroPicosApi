# Documentación de ReportRoutes

## Descripción

Este módulo define las rutas relacionadas con el manejo de reportes utilizando Express. Incluye rutas para obtener, agregar, actualizar y eliminar reportes a través de un controlador de reportes.

## Importaciones

```typescript
import { SUCCESS } from "@/Constants/message";
import ReportController from "@/Controller/ReportController";
import { Router, Request, Response } from "express";
```

- `SUCCESS`: Constante que contiene mensajes de éxito.
- `ReportController`: Controlador con las funciones necesarias para manejar reportes.
- `Router`, `Request`, `Response`: Componentes de Express para manejar rutas y solicitudes/respuestas HTTP.

## Definición de la Ruta

```typescript
const route = Router();
```

Crea una nueva instancia de `Router` para definir las rutas específicas de reportes.

## Función Principal

```typescript
const ReportRoutes = (app: Router) => {
  app.use("/report", route);
```

La función principal `ReportRoutes` toma un objeto `Router` (`app`) y define todas las rutas bajo el path `/report`.

### Rutas Definidas

#### Obtener Todos los Reportes

```typescript
route.get("/", async (req: Request, res: Response) => {
  try {
    const report = await ReportController.get();
    return res.status(200).json({ data: report });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});
```

- **Método**: `GET`
- **URL**: `/report/`
- **Descripción**: Obtiene todos los reportes.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos de los reportes.
- **Respuesta con Error**: Estado 500 y mensaje de error.

#### Obtener un Reporte por ID

```typescript
route.get("/:id", async (req: Request, res: Response) => {
  try {
    const report = await ReportController.getById(req.params.id);
    return res.status(200).json({ data: report });
  } catch (err: any) {
    return res.status(err.status).json({ message: err.message });
  }
});
```

- **Método**: `GET`
- **URL**: `/report/:id`
- **Descripción**: Obtiene un reporte específico por su ID.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos del reporte.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

#### Agregar un Nuevo Reporte

```typescript
route.post("/add", async (req: Request, res: Response) => {
  try {
    const report = await ReportController.add(req.body);
    return res.status(200).json({ data: report });
  } catch (err: any) {
    return res.status(err.status).json({ message: err.message });
  }
});
```

- **Método**: `POST`
- **URL**: `/report/add`
- **Descripción**: Agrega un nuevo reporte.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos del reporte agregado.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

#### Actualizar un Reporte

```typescript
route.put("/update", async (req: Request, res: Response) => {
  try {
    const report = await ReportController.update(req.body.id, req.body.report);
    return res.status(200).json({ data: report });
  } catch (err: any) {
    return res.status(err.status).json({ message: err.message });
  }
});
```

- **Método**: `PUT`
- **URL**: `/report/update`
- **Descripción**: Actualiza un reporte existente.
- **Respuesta Exitosa**: Estado 200 y JSON con los datos del reporte actualizado.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

#### Eliminar un Reporte

```typescript
route.delete("/delete", async (req: Request, res: Response) => {
  try {
    await ReportController.delete(req.body.id);
    return res.status(200).json({ message: SUCCESS.DELETED });
  } catch (err: any) {
    return res.status(err.status).json({ message: err.message });
  }
});
```

- **Método**: `DELETE`
- **URL**: `/report/delete`
- **Descripción**: Elimina un reporte existente.
- **Respuesta Exitosa**: Estado 200 y mensaje de éxito.
- **Respuesta con Error**: Estado dinámico basado en el error y mensaje de error.

## Exportación del Módulo

```typescript
export default ReportRoutes;
```

Exporta la función `ReportRoutes` para su uso en otras partes de la aplicación.