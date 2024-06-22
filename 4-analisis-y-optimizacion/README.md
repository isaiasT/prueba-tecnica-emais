# 4. Análisis y optimización

- El problema de rendimiento que presentaba el componente era que la función `processData` se ejecutaba entera con cada renderizado.
- Para que ésta solo se ejecute una vez he hecho uso del hook `useMemo` de react para memorizar el resultado de su ejecución, poniendo en su array de dependencias el `data` que nos llega por parámetro.
- Así de esta manera la función `processData` solo se ejecutaría de nuevo si `data` cambiase.
