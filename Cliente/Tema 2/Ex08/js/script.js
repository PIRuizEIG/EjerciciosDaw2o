function calcularImpuestos(precio) {
    const IVA = 0.21;
    if (Number.isNaN(precio)) {
        return 0;
    }
    return precio * IVA;
}

document.getElementById("calcular").addEventListener("click", function () {
    const precio = Number(document.getElementById("precio").value);
    const salida = document.getElementById("descontado");
    if (Number.isNaN(precio)) {
        salida.textContent = "Introduce valor numérico.";
    } else if (precio <= 0) {
        salida.textContent = "Precio fuera de rango.";
    } else {
        const precioFinal = precio + calcularImpuestos(precio);
        salida.textContent = `Precio final: ${precioFinal.toFixed(2)} €`;
    }
});

document.getElementById("esPar").addEventListener("click", function () {
    const valor = document.getElementById("par");
    const num = Number(valor.value);
    const salida = document.getElementById("impar");
    if (Number.isNaN(num)) {
        salida.textContent = "Introduce un número";
    } else if (num % 2 === 0) {
        salida.textContent = "Es par";
    } else {
        salida.textContent = "Es impar";
    }
});

document.getElementById("evaluar").addEventListener("click", function () {
    const valor = document.getElementById("nota");
    const num = Number(valor.value);
    const salida = document.getElementById("cal");
    if (Number.isNaN(num) || num < 0 || num > 10) {
        salida.textContent = "Introduce una nota valida";
    } else if (num >= 9) {
        salida.textContent = "Sobresaliente";
    } else if (num >= 7) {
        salida.textContent = "Notable";
    } else if (num >= 5) {
        salida.textContent = "Aprobado";
    } else {
        salida.textContent = "Suspenso";
    }
});

function generateList(max, mult) {
    let retString = "";
    for (let i = 1; i <= max; i++) {
        retString = retString + "<li>";
        if (i % mult === 0) {
            retString = retString + "<b>" + i + "</b>";
        }
        else {
            retString = retString + i;
        }
        retString = retString = retString + "</li>";
    }
    return retString;
}

const numList = document.getElementById("numList");
numList.innerHTML = generateList(50, 5);