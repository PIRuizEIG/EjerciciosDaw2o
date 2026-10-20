document.getElementById("generar").addEventListener("click", function () {
    const cantidad = Number(document.getElementById("cantidad").value);
    const lista = document.getElementById("lista");
    if (Number.isNaN(cantidad) || cantidad < 1) {
        lista.innerHTML = "<li>Introduce una cantidad válida.</li>";
        return;
    }
    let html = "";
    for (let i = 1; i <= cantidad; i++) {
        html += "<li>Elemento " + i + "</li>";
    }
    lista.innerHTML = html;
});