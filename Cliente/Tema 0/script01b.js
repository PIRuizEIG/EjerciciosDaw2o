let counter = 0;
const max = 20;
let result = "";

document.getElementById("boton")
    .addEventListener("click", function () {
        while (counter < max) {
            counter++;
            if (counter % 2 == 0) result += " " + counter;
        }
        document.getElementById("titulo").textContent = result;
        console.log("Texto actualizado correcta4mente");
    });