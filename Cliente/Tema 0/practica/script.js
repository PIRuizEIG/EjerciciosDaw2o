// Array de tecnologías
let technology = ["HTML", "CSS", "JavaScript", "Apache", "PHP"];
// Ficha de alumno
const student = {
    nombre: "Pablo Illescas Ruiz",
    curso: "2º DAW",
    modulo: "Entorno Cliente"
};
// Obtener lista HTML
function showList(list) {
    let html = "";

    for (let i = 0; i < list.length; i++) {
        html += "<li>" + list[i] + "</li>";
    }

    const mensaje = "Hay " + list.length + " tecnologías."

    console.log(mensaje);
    return html;
}
// Obtener ficha
function showObj(obj) {

    const html = "<p><strong>Nombre:</strong> " + obj.nombre + "</p>" +
        "<p><strong>Curso:</strong> " + obj.curso + "</p>" +
        "<p><strong>Módulo:</strong> " + obj.modulo + "</p>";

    return html;
}
// Añadir evento al botón
document.getElementById("boton").addEventListener("click", function () {
    // Mostrar lista de tecnologías
    document.getElementById("lista").innerHTML = showList(technology);
    // Mostrar ficha de estudiante
    document.getElementById("salida").innerHTML = showObj(student);
});

