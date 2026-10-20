document.getElementById("calcular").addEventListener("click", function () {
    const precio = Number(document.getElementById("precio").value);
    const descuento = Number(document.getElementById("descuento").value);
    const salida = document.getElementById("salida");
    if (Number.isNaN(precio) || Number.isNaN(descuento)) {
        salida.textContent = "Introduce valores numéricos.";
    } else if (precio <= 0 || descuento < 0 || descuento > 100) {
        salida.textContent = "Precio o descuento fuera de rango.";
    } else {
        const rebaja = precio * descuento / 100;
        const precioFinal = precio - rebaja;
        salida.textContent = `Precio final: ${precioFinal.toFixed(2)} €`;
    }
});