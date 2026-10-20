const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const boton = document.getElementById("sumar");
const resultado = document.getElementById("resultado");
boton.addEventListener("click", function () {
    const a = Number(num1.value);
    const b = Number(num2.value);
    const suma = a + b;
    resultado.textContent = "Resultado: " + suma;
    console.log(a, b, suma);
});