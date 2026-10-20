function sumar(a, b) {
    return a + b;
}
function paridad(numero) {
    if (numero % 2 === 0) {
        return "Es par";
    } else {
        return "Es impar";
    }
}

const num1 = Number(prompt("Introduce el primer número:"));
const num2 = Number(prompt("Introduce el segundo número:"));

const suma = sumar(num1, num2);
const resultadoParidad = paridad(suma);

document.getElementById("suma").textContent = "La suma es: " + suma;
document.getElementById("paridad").textContent = resultadoParidad;