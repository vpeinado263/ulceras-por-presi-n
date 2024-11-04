# 3ra-Tarea-REACT-NEXT.JS

Este proyecto fue creado como parte de mi aprendizaje en **React** y  **Next.js** , para mostrar mis habilidades en el desarrollo de aplicaciones web modernas. El proyecto incluye conceptos clave como enrutamiento automático, manejo de estado, flujo de datos unidireccional, y componentes funcionales en React.

## Aprendizajes 

### 1. Enrutamiento Automático en Next.js

* **Pages** : Al crear una nueva página en la carpeta `pages`, Next.js crea automáticamente una ruta correspondiente. Este enfoque simplifica la creación de rutas sin configuraciones adicionales.
* **Concepto en React** : Enrutamiento basado en el sistema de archivos, exclusivo de Next.js.

### 2. Convención de Nombres en Componentes

* **Mayúsculas en Componentes** : Para que React reconozca un componente, la primera letra debe estar en mayúscula. Esto asegura que el componente se interprete correctamente en la aplicación.

### 3. Uso del Componente `<Link>` en Next.js

* Reemplaza la etiqueta `<a>` por `<Link>` en la navegación interna, lo cual mejora la semántica y optimiza el rendimiento.

### 4. Flujo de Datos Unidireccional

* **Props** : Las props se transmiten de padres a hijos. React establece un flujo de datos unidireccional que permite un mejor control sobre la aplicación y la lógica.

### 5. Programación Reactiva y Estados

* **useState ** : Aprendí a manejar el estado, lo cual es fundamental para la programación reactiva en React.
* **Acción y Reacción** : El estado cambia en respuesta a acciones del usuario, actualizando automáticamente la UI.

### 6. Ejemplo Práctico: Contador

* Con los conceptos aprendidos, creé un contador que utiliza `useState` para actualizar y mostrar el conteo en tiempo real.

### Desafíos Encontrados

1. **Renderización Recursiva y Bucles Infinitos**:
   - **Desafío**: Observé que ciertos componentes podrían causar un bucle infinito si se renderizan de manera recursiva o si `Link` lleva a la misma ruta actual, generando una navegación continua sin salida.
   - **Solución**: Ajusté la lógica para evitar llamadas recursivas en componentes y revisé el uso de `Link` para asegurar que no redirigiera a la misma ruta sin una condición específica. Este aprendizaje me ayudó a comprender mejor cómo Next.js maneja el ciclo de renderizado y la navegación.

2. **Problemas con Fast Refresh**:
   - **Desafío**: Durante el desarrollo, `Fast Refresh` ejecutaba una recarga completa cuando había cambios en los componentes, lo que afectaba el flujo de desarrollo.
   - **Solución**: Identifiqué las dependencias y configuraciones que causaban estos errores, asegurando que los cambios en la configuración se reflejaran adecuadamente tras reiniciar el servidor.

3. **Despliegue en Vercel**:
   - **Desafío**: Al desplegar en Vercel, la aplicación mostraba errores `404: NOT_FOUND`.
   - **Solución**: Ajusté la configuración de rutas y archivos de configuración como `vercel.json`, y revisé el proceso de compilación para asegurar que las páginas fueran prerenderizadas correctamente.

### Aprendizajes Clave

- **Optimización de Imágenes y Navegación**: La utilización de `Image` y `Link` de Next.js mejoró la carga de imágenes y la navegación, incrementando la eficiencia de la aplicación.
- **Configuración Avanzada de `next.config.mjs`**: Aprendí a gestionar configuraciones avanzadas para optimizar el rendimiento, definir dominios de imágenes y evitar errores en versiones recientes de Next.js.
- **Evitación de Bucles Infinitos**: Al trabajar con enlaces recursivos y renderizado condicional, entendí la importancia de diseñar rutas y componentes cuidadosamente para prevenir ciclos de renderizado.

## Tecnologías Utilizadas

- **React**: Para la creación de componentes interactivos.
- **Next.js**: Para el enrutamiento, optimización de imágenes y generación de páginas estáticas.
- **CSS-in-JS**: Usado para el estilo de componentes de manera encapsulada.


## Desafíos 

* **Flujo de Datos y Props** : Entender el flujo de datos unidireccional en React y aprender a pasar datos solo de padres a hijos fue uno de los retos iniciales.

ESTRUCTURA de componentes- Atomic desing

* El proyecto sigue la metodologia Atomic Desing para organizar y utilizat componentes en cinco categorías principales: ATOMO, MOLÉCULAS, ORGANISMOS, TEMPLATES, PAGINAS.

Puedes ver el proyecto en vivo aquí: [3ra-Tarea-REACT-NEXT.JS](https://3ra-tarea-react-next-js.vercel.app/)

