function saludar(nombre) {
    return "Hola, " + nombre;
}

function despedir(nombre) {
    return "Adios, " + nombre;
}

const mensaje = despedir("Lucia");

document.getElementById("salida").textContent = mensaje;

console.log(mensaje);