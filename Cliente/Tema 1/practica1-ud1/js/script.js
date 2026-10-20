const boton = document.getElementById("detectar");
const salida = document.getElementById("salida");
boton.addEventListener("click", function () {
    const tieneLocalStorage =
        typeof localStorage !== "undefined";
    salida.innerHTML = `
<li>Idioma: ${navigator.language}</li>
<li>Ancho: ${window.innerWidth}px</li>
<li>Alto: ${window.innerHeight}px</li>
<li>LocalStorage: ${tieneLocalStorage}</li>
`;
    console.log("Datos del navegador cargados correctamente.");
});