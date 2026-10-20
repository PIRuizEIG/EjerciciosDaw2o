alert("¡JavaScript está funcionando!");
console.log("El archivo JavaScript se ha cargado correctamente");

document.getElementById("boton")
    .addEventListener("click", function () {
        document.getElementById("titulo").textContent = "¡He cambiado la página con JavaScript!";
    });