const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");
boton.addEventListener("click", function () {
    mensaje.textContent = "JavaScript se ejecuta en el navegador";
    console.log("Botón pulsado correctamente");
});