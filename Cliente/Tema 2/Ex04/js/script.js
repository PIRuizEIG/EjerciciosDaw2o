document.getElementById("mostrar").addEventListener("click", function () {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += "<p>Número " + i * 2 + "</p>";
    }
    document.getElementById("salida").innerHTML = resultado;
});