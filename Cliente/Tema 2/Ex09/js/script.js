function checkValid(element) {
    let input = document.getElementById(element);
    let value = input.value.trim();
    if (value === "" || isNaN(Number(value))) {
        alert("Por favor, introduce un número válido.");
        input.focus();
        return false;
    }
    return true;
}

function sum(elementA, elementB) {
    const validA = checkValid(elementA);
    const validB = checkValid(elementB);
    if (validA && validB) {
        const numA = Number(document.getElementById(elementA).value);
        const numB = Number(document.getElementById(elementB).value);
        const sum = numA + numB;
        return sum;
    } else {
        console.error("Valores no válidos.");
    }
}

function rest(elementA, elementB) {
    const validA = checkValid(elementA);
    const validB = checkValid(elementB);
    if (validA && validB) {
        const numA = Number(document.getElementById(elementA).value);
        const numB = Number(document.getElementById(elementB).value);
        const sum = numA - numB;
        return sum;
    } else {
        console.error("Valores no válidos.");
    }
}

function mult(elementA, elementB) {
    const validA = checkValid(elementA);
    const validB = checkValid(elementB);
    if (validA && validB) {
        const numA = Number(document.getElementById(elementA).value);
        const numB = Number(document.getElementById(elementB).value);
        const sum = numA * numB;
        return sum;
    } else {
        console.error("Valores no válidos.");
    }
}

function div(elementA, elementB) {
    const validA = checkValid(elementA);
    const validB = checkValid(elementB);
    if (validA && validB) {
        const numA = Number(document.getElementById(elementA).value);
        const numB = Number(document.getElementById(elementB).value);
        if (numB === 0) {
            alert("No se puede dividir por 0.");
            console.error("División por 0.");
        }
        const sum = numA / numB;
        return sum;
    } else {
        console.error("Valores no válidos.");
    }
}

document.getElementById("sum").addEventListener("click", function () {
    document.getElementById("result").textContent = sum("numA", "numB");
});

document.getElementById("rest").addEventListener("click", function () {
    document.getElementById("result").textContent = rest("numA", "numB");
});

document.getElementById("mult").addEventListener("click", function () {
    document.getElementById("result").textContent = mult("numA", "numB");
});

document.getElementById("div").addEventListener("click", function () {
    document.getElementById("result").textContent = div("numA", "numB");
});