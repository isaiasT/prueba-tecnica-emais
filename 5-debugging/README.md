# 5. Debugging

- Para debuggear he usado el propio debugger de vscode en un proyecto recién creado de vite siguiendo la siguiente configuración en el archivo `.vscode/launch.json`:

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:5173",
            "webRoot": "${workspaceFolder}/src"
        }
    ]
}
```

- He añadido el archivo para el componente `Counter` y lo he importado y usado en el `App.txs` directamente.
- Después analizando un poco los posibles problemas que podrían haber he puesto un breakpoint dentro del `useEffect`, ya que su array de dependencias está compuesto por ambos manejadores.
- Efectivamente después de debugear veo que en el renderizado inicial se pasa 2 veces a través del `useEffect`, en vez de sólamente una.
- Para éste caso el error es inapreciable pero en el futuro puede dar problemas tener el array de dependencias así, como por ejemplo que se dé un bucle infinito.
- Simplemente para arreglarlo, el array de dependencias debería quedar de la siguiente manera: `[count]`. Así solo se ejecutaría el `useEffect` cuando se modifique el valor de `count`.
