const inputColor = document.getElementById("color");
const botonGuardar = document.getElementById("guardar");
const botonLeer = document.getElementById("leer");
const salida = document.getElementById("salida");
botonGuardar.addEventListener("click", function () {
    localStorage.setItem("colorFavorito", inputColor.value);
    salida.textContent = "Color guardado.";
});
botonLeer.addEventListener("click", function () {
    const color = localStorage.getItem("colorFavorito");
    salida.textContent = "Color guardado: " + color;
});