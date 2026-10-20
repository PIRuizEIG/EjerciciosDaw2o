function saludar(nombre) {
    return "Hola, " + nombre;
}

const mensaje = saludar("Lucia");

document.getElementById("salida").textContent = mensaje;

console.log(mensaje);