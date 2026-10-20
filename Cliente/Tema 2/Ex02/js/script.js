document.getElementById("calcular").addEventListener("click", function () {
    const texto1 = document.getElementById("numero1").value;
    const texto2 = document.getElementById("numero2").value;
    const numero1 = Number(texto1);
    const numero2 = Number(texto2);
    console.log("Valor 1:", texto1, typeof texto1);
    console.log("Valor 1 convertido:", numero1, typeof numero1);
    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        document.getElementById("resultado").textContent
            =
            "Introduce dos números válidos.";
    } else {
        const suma = numero1 + numero2;
        document.getElementById("resultado").textContent
            =
            `Resultado: ${suma}`;
    }
});