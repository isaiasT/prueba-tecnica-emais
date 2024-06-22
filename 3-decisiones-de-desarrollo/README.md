# 3. Decisiones de desarrollo

- Para manejar el estado global de la aplicación en un principio utilizaría la librería `Redux`, ya que es la que mas he utilizado y con la que estoy mas familiarizado.
- Por otra parte valoraría usar alguna otra librería mas moderna y a priori mas sencilla como `Jotai` en base a los requerimientos de la aplicación.
- En cuanto a la autenticación usaría `auth0`. Librería bastante inmediata de integrar con React gracias a su SDK. También por haber trabajado anteriormente con ella y sabiendo que se puede tener tener un muy buen sistema de autenticación en relativamente poco tiempo.
- Respecto a la estructura de la aplicación, optaría por una arquitectura hexagonal para hacer el proyecto mas mantenible y con gran flexibilidad ante el cambio de tecnologias. A grandes rasgos sería algo así:
    - domain
        - models (Tipos e interfaces de cada modelo de datos)
        - repositories (Interfaces a implementar por los repositorios de infra)
        - services (Casos de uso de la aplicación que utilizan los modelos y los repositorios)
    - infra
        - http (Implementación de clientes http que se usarán en los repositorios, por ejemplo un cliente de axios)
            - dto (Definición de los objetos recibidos a través de los clientes)
        - repositories (Repositorios para acceder a diferentes datos usando los clientes http)
        - components (Aquí se guardarían todos los componentes JSX de la aplicación)
