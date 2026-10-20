function sumar(a, b) {
return a + b;
}
function esPar(numero) {
return numero % 2 === 0;
}
const total = sumar(4, 6);
const par = esPar(total);

document.getElementById("suma").textContent = "Suma: " + total;
document.getElementById("paridad").textContent = "¿Es par?: " + par;