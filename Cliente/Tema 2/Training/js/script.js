//[ReferenceError]
// Error 1: variable mal escrita
const nombre = "Laura";
//console.log(nommbre);
console.log(nombre);
//[SyntaxError]
// Error 2: falta cerrar comillas
//const mensaje = "Hola;
const mensaje = "Hola";
console.log(mensaje);
//[Resultado inesperado]
// Error 3: conversión olvidada
const numero1 = "10";
const numero2 = "5";
//console.log(numero1 + numero2);
console.log(Number(numero1) + Number(numero2));
//[Condición incorrecta]
// Error 4: asignación en condición
const edad = 16;
//if (edad = 18) {
if (edad === 18) {
    console.log("Mayor de edad");
}