# 2. Refactorización de código

## Decisiones de desarrollo

- En primer lugar para una mayor comodidad usando Typescript he declarado el modelo del usuario en `/domain/models/User`, separando la dirección en una nueva interfaz.
- He separado la visualización de la dirección en un nuevo componente al cual se le puede pasar por parámetro (`UserProfileAddress`).
- En ambos componentes (`UserProfile` y `UserProfileAddress`) he desestructurado lo que se recibe por parámetro para una major legibilidad en el JSX.
