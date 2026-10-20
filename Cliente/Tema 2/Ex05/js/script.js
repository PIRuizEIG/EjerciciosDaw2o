document.getElementById("generar").addEventListener("click", function () {
    // Validar
    const numeroTexto = document.getElementById("numero").value;
    const numero = Number(numeroTexto);
    const tabla = document.getElementById("tabla");
    if (Number.isNaN(numero) || numeroTexto === "") {
        tabla.textContent = "Introduce un número válido.";
        return;
    }
    // aquí generaremos la tabla
    let resultado = "<h2>Tabla del " + numero + "</h2>";
    for (let i = 1; i <= 10; i++) {
        resultado += "<p>" + numero + " x " + i + " = "
            + (numero * i) + "</p>";
    }
    tabla.innerHTML = resultado;
});