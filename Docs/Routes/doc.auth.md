# Autenticación API

## Introducción

Este documento describe las rutas de autenticación disponibles en la API. Estas rutas permiten a los usuarios registrarse e iniciar sesión, obteniendo así un token de autenticación para acceder a otros recursos protegidos.

## Rutas de Autenticación

### 1. Inicio de Sesión

**Endpoint:** `POST /auth/login`

**Descripción:** Permite a un usuario iniciar sesión utilizando su correo electrónico y contraseña. Si las credenciales son correctas, se devuelve un token de autenticación junto con los detalles del usuario.

**Parámetros:**

- **email** (string, requerido): El correo electrónico del usuario.
- **password** (string, requerido): La contraseña del usuario.

**Ejemplo de Solicitud:**

```json
POST /auth/login
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "contraseña123"
}
```

**Ejemplo de Respuesta Exitosa:**

```json
{
  "message": "Login Successful",
  "data": {
    "user": {
      "id": "123",
      "email": "usuario@example.com",
      "name": "Usuario Ejemplo"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Respuestas de Error Comunes:**

- **400 Bad Request:** Faltan campos requeridos.

  ```json
  {
    "message": "All fields are required"
  }
  ```

- **500 Internal Server Error:** Error en el servidor.
  ```json
  {
    "message": "Error message"
  }
  ```

### 2. Registro

**Endpoint:** `POST /auth/register`

**Descripción:** Permite a un usuario registrarse creando una nueva cuenta. Si el registro es exitoso, se devuelve un token de autenticación junto con los detalles del usuario.

**Parámetros:**

- **email** (string, requerido): El correo electrónico del usuario.
- **password** (string, requerido): La contraseña del usuario.

**Ejemplo de Solicitud:**

```json
POST /auth/register
Content-Type: application/json

{
  "email": "nuevo@example.com",
  "password": "nuevacontraseña123"
}
```

**Ejemplo de Respuesta Exitosa:**

```json
{
  "message": "Registration Successful",
  "data": {
    "user": {
      "id": "456",
      "email": "nuevo@example.com",
      "name": "Nuevo Usuario"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Respuestas de Error Comunes:**

- **400 Bad Request:** Faltan campos requeridos.

  ```json
  {
    "message": "All fields are required"
  }
  ```

- **500 Internal Server Error:** Error en el servidor.
  ```json
  {
    "message": "Error message"
  }
  ```

## Notas Adicionales

- Todos los endpoints deben incluir el `Content-Type: application/json` en los encabezados de la solicitud.
- Los tokens devueltos deben ser usados para autenticar solicitudes a otros endpoints protegidos de la API.

## Contacto

Para más información o soporte, contacta a nuestro equipo en [soporte@example.com](mailto:soporte@example.com).

---

_Documentación generada automáticamente. Por favor, revisa cualquier detalle específico de implementación._
