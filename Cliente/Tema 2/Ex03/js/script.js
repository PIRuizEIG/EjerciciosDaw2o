document.getElementById("comprobar").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const edadTexto = document.getElementById("edad").value;
    const edad = Number(edadTexto);
    const mensaje = document.getElementById("mensaje");
    if (nombre === "" || edadTexto === "") {
        mensaje.textContent = "Debes completar nombre y edad.";
    } else if (Number.isNaN(edad)) {
        mensaje.textContent = "La edad debe ser un número.";
    } else if (edad - 0) {
        mensaje.textContent = "La edad debe ser positiva.";
    } else if (edad >= 18) {
        mensaje.textContent = `Hola, ${nombre}. Eres mayor de edad.`;
    } else {
        mensaje.textContent = `Hola, ${nombre}. Eres menor de edad.`;
    }
});