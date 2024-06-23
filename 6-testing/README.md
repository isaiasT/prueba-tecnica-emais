# 6. Testing

## Decisiones de desarrollo

- El primer paso que he tomado para poder testear el componente es instalar `React Testing Library y Jest` así como todas las dependencias necesarias: `npm install --save-dev jest @testing-library/react ts-jest @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom identity-obj-proxy`.
- Adicionalmente he añadido el script `"test": "jest"` al package.json, he creado el jest.config.ts y he añadido las `compilerOptions` al tsconfig.json.
- Con toda esta configuración podemos ejecutar `npm run test` para ejecutar todos los tests de `/src/__tests__`, obteniendo tambien la cobertura de éstos.
- Para finalizar, en el archivo `ButtonCounter.test.tsx` he implementado 2 tests para asegurar el correcto renderizado del componente dado el label pasado por las props y otro para comprobar que el contador aumente correctamente.
