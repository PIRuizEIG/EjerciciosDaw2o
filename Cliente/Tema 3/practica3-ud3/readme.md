# Práctica 3 (UD3) - Panel Inteligente del Navegador

**Asignatura:** Desarrollo Web en Entorno Cliente  
**Curso:** 2º DAW  
**Autor:** Pablo Illescas Ruiz  

---

## 📝 Descripción del Proyecto

Esta aplicación web consiste en un **Panel Inteligente** modular que demuestra el uso interactivo de los objetos nativos y predefinidos de JavaScript en el entorno del navegador. 

La práctica se divide en 6 utilidades funcionales:
1. **Analizador de texto:** Procesamiento y manipulación de cadenas mediante el objeto `String`.
2. **Generador de números aleatorios:** Operaciones matemáticas, redondeos y comprobaciones numéricas con el objeto `Math`.
3. **Fecha, hora y saludo:** Manipulación de fechas, horas locales y saludos dinámicos según el momento del día con el objeto `Date`.
4. **Información del navegador:** Extracción e inspección de datos del sistema y la ventana usando los objetos `navigator`, `screen`, `location` y `window`.
5. **Preferencia guardada:** Gestión de la persistencia de datos en el cliente mediante la API de `localStorage`.
6. **Cuenta atrás:** Control de temporizadores asíncronos y refresco dinamizado con `setInterval` y `clearInterval`.

---

## 📸 Evidencias y Capturas de Pantalla

En la raíz del proyecto se incluyen las capturas exigidas que certifican el correcto funcionamiento, control de errores y depuración del código:

* **`captura-console.png`**: Demuestra la ejecución limpia de la aplicación con la consola de DevTools de Google Chrome abierta en tiempo de ejecución.
* **`captura-storage.png`**: Muestra la pestaña *Aplicación / Local Storage* de las herramientas de desarrollador, demonstrando el correcto almacenamiento y persistencia del parámetro `userName`.
* **`captura-storage-vacio.png`**: Muestra el comportamiento defensivo de la aplicación y el estado del almacenamiento local cuando la clave `userName` ha sido eliminada mediante `localStorage.removeItem()`.
* **`captura-breakpoint.png`**: Evidencia la pausa en la ejecución del código mediante un punto de interrupción (*breakpoint*) en el panel *Fuentes (Sources)*, inspeccionando los valores del ámbito local y la pila de llamadas (*Call Stack*).
* **`captura-error-dom.png`**: Muestra el control de errores, combina una alerta emergente (`alert()`) y un registro explícito en la consola (`console.error()`) ante la ausencia o fallo en la carga de elementos del DOM.

---

## 🛠️ Estructura del Proyecto

```text
practica3-ud3/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── captura-breakpoint.png
├── captura-console.png
├── captura-error-dom.png
├── captura-storage.png
├── captura-storage-vacio.png
├── index.html
└── README.md
```