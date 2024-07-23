# Documentación de DatabaseController

## Descripción

`DatabaseController` es una clase genérica en TypeScript que maneja operaciones básicas de base de datos (CRUD) utilizando MySQL. Proporciona métodos para obtener, agregar, actualizar y eliminar registros en una tabla específica.

## Importaciones

```typescript
import { Connection } from "mysql2";
```

- `Connection`: Importa el tipo `Connection` de `mysql2`, que se utiliza para manejar la conexión a la base de datos MySQL.

## Clase DatabaseController

```typescript
class DatabaseController<T> {
  private tableName: string;
  private db: Connection;

  constructor(tableName: string, db: Connection) {
    this.tableName = tableName;
    this.db = db;
  }
```

### Propiedades

- `tableName`: Nombre de la tabla en la base de datos.
- `db`: Instancia de la conexión a la base de datos MySQL.

### Métodos

#### `get`

Obtiene todos los registros de la tabla.

```typescript
get = (): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    this.db.query(`SELECT * FROM ${this.tableName}`, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results as T[]);
    });
  });
};
```

- **Descripción**: Ejecuta una consulta para obtener todos los registros de la tabla.
- **Retorno**: Promesa que resuelve con un array de registros de tipo `T`.

#### `getById`

Obtiene un registro específico por su ID.

```typescript
getById = (id: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    this.db.query(
      `SELECT * FROM ${this.tableName} WHERE id = ?`,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve((results as T[])[0]);
      }
    );
  });
};
```

- **Descripción**: Ejecuta una consulta para obtener un registro por su ID.
- **Parámetros**: `id` - ID del registro a obtener.
- **Retorno**: Promesa que resuelve con el registro de tipo `T`.

#### `add`

Agrega un nuevo registro a la tabla.

```typescript
add = (data: T): Promise<T> => {
  return new Promise((resolve, reject) => {
    this.db.query(
      `INSERT INTO ${this.tableName} SET ?`,
      data,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      }
    );
  });
};
```

- **Descripción**: Ejecuta una consulta para insertar un nuevo registro en la tabla.
- **Parámetros**: `data` - Datos del nuevo registro a agregar.
- **Retorno**: Promesa que resuelve con los datos del registro agregado.

#### `update`

Actualiza un registro existente en la tabla.

```typescript
update = (id: string, data: T): Promise<T> => {
  return new Promise((resolve, reject) => {
    this.db.query(
      `UPDATE ${this.tableName} SET ? WHERE id = ?`,
      [data, id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(data);
      }
    );
  });
};
```

- **Descripción**: Ejecuta una consulta para actualizar un registro existente en la tabla.
- **Parámetros**: 
  - `id` - ID del registro a actualizar.
  - `data` - Nuevos datos del registro.
- **Retorno**: Promesa que resuelve con los datos actualizados del registro.

#### `delete`

Elimina un registro de la tabla por su ID.

```typescript
delete = (id: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    this.db.query(
      `DELETE FROM ${this.tableName} WHERE id = ?`,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results as T);
      }
    );
  });
};
```

- **Descripción**: Ejecuta una consulta para eliminar un registro de la tabla.
- **Parámetros**: `id` - ID del registro a eliminar.
- **Retorno**: Promesa que resuelve con los resultados de la eliminación.

## Uso

### Ejemplo de Uso

```typescript
import mysql from "mysql2";
import DatabaseController from "@/DatabaseController";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "my_database"
});

const productController = new DatabaseController("products", connection);

// Obtener todos los productos
productController.get().then(products => console.log(products));

// Obtener un producto por ID
productController.getById("1").then(product => console.log(product));

// Agregar un nuevo producto
const newProduct = { name: "New Product", price: 10.99 };
productController.add(newProduct).then(product => console.log(product));

// Actualizar un producto
const updatedProduct = { name: "Updated Product", price: 9.99 };
productController.update("1", updatedProduct).then(product => console.log(product));

// Eliminar un producto
productController.delete("1").then(result => console.log(result));
```

Este ejemplo muestra cómo se puede usar `DatabaseController` para manejar operaciones CRUD en una tabla de productos.