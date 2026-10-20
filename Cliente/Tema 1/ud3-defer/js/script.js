const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");
boton.addEventListener("click", function () {
    titulo.textContent = "Título cambiado desde JavaScript";
    console.log("El script externo funciona");
});