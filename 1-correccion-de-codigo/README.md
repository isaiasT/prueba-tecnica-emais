# 1. Correción de código

## Decisiones de desarrollo

- En primer lugar la función `fetchUserData` recibía por parametro el id del usuario como un string, por lo que lo sustituído por un number para adecuarlo mas al modelo de `User`.
- Dentro del fetch de la misma función se estaban usando comillas simples por lo que las he sustituido por back quotes para añadir correctamente el id del usuario mediante `${userId}`.
- También he tipado `userData: User` para evitar devolver los datos como un any.
- Por último en el console log he cambiado el acceso al nombre del usuario `user.name` en minúscula, acorde a la interfaz.
