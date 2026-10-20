let counter = 0;
const max = 10;
let result = "";

document.getElementById("boton")
    .addEventListener("click", function () {
        while (counter < max) {
            counter++;
            result += " " + counter;
        }
        document.getElementById("titulo").textContent = result;
        console.log("Texto actualizado correcta4mente");
    });