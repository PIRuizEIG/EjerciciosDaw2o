/**
 * @param {string} value Valor a analizar
 * @returns True si la cadena es vacía o null
 */
function isNullOrEmpty(value) {
    return value == null || value.trim() === "";
}

/**
 * @returns Nombre del usuario
 */
function getName() {
    let name = "";
    do {
        name = window.prompt("Introduzca su nombre:");
        if (isNullOrEmpty(name)) {
            alert("Por favor, introduce un nombre válido.");
            console.error("Nombre no válido.");
        }
    } while (isNullOrEmpty(name));
    return name;
}

/**
 * @returns Tipo de descuento
 */
function getDiscountType() {
    let type = window.prompt("Introduzca su tipo de cliente (normal, estudiante, premium):", "normal");
    if (type == null) {
        console.warn("Cancelación en tipo de cliente.");
        return "normal";
    }
    type = type.toLocaleLowerCase().trim();
    if (type != "premium" && type != "estudiante") type = "normal";
    return type;
}

/**
 * @param {string} type Tipo de cliente
 * @param {float} subtotal Subtotal sobre el que aplicar descuento
 * @returns Total tras aplicar el descuento
 */
function getDiscount(type, subtotal) {
    let discount = 0;
    switch (type) {
        case "premium":
            discount = subtotal * 0.15;
            break;
        case "estudiante":
            discount = subtotal * 0.10;
            break;
        default:
            discount = 0;
            break;
    }
    return discount;
}

/**
 * @param {float} total
 * @returns Tamaño de la compra
 */
function getCartSize(total) {
    if (total < 30) {
        return "Compra pequeña";
    } else if (total > 80) {
        return "Compra grande";
    } else {
        return "Compra media";
    }
}

/**
 * @returns Cantidad de productos y subtotal
 */
function getCart() {
    let price = 0;
    let products = 0;
    let subtotal = 0;
    let value = "";
    do {
        value = window.prompt("Introduzca precio del producto:", "0");
        if (value === null) {
            alert("Se ha cancelado la introducción. Introduzca 0 si desea finalizar o ingrese un precio válido.");
            console.error("Cancelación en carrito.");
            price = -1;
            continue;
        }
        value = value.trim();
        price = Number(value);
        if (value === "") price = -1;
        if (isNaN(price) || price < 0) {
            alert("Por favor, introduzca un precio de producto válido.");
            console.warn("Precio de producto no válido.");
        } else if (price > 0) {
            products++;
            subtotal += price;
        }
    } while (price != 0);
    return { products, subtotal };
}

/**
 * @param {string} name Nombre de cliente
 * @param {string} discountType Tipo de descuento
 * @param {int} products Cantidad de productos
 * @param {float} subtotal Subtotal
 * @param {string} cartSize Tamaño de compra
 * @param {float} discount Descuento aplicado
 * @param {float} shipping Gastos de envío
 * @param {float} total Total
 * @returns innerHTML para la respuesta
 */
function generateResponse(name, discountType, products, subtotal, cartSize, discount, shipping, total) {
    return "<h2>Resumen de la compra</h2>"
        + '<ul class="summary-list">'
        + "<li><span>Cliente:</span> <strong>" + name + "</strong></li>"
        + "<li><span>Tipo de cliente:</span> <strong>" + discountType + "</strong></li>"
        + "<li><span>Productos comprados:</span> <strong>" + products + "</strong></li>"
        + "<li><span>Subtotal:</span> <strong>" + subtotal.toFixed(2) + " €</strong></li>"
        + "<li><span>Descuento aplicado:</span> <strong>" + discount.toFixed(2) + " €</strong></li>"
        + "<li><span>Gastos de envío:</span> <strong>" + shipping.toFixed(2) + " €</strong></li>"
        + '<li class="total-row"><span>Total final:</span> <strong>' + total.toFixed(2) + ' €</strong></li>'
        + '<li class="badge-row"><span>Clasificación:</span> <span class="badge">' + cartSize + '</span></li>'
        + '</ul>';
}

document.getElementById("start").addEventListener("click", function () {
    // Obtener datos del cliente
    const name = getName();
    const discountType = getDiscountType();
    // Obtener carrito de la compra
    const { products, subtotal } = getCart();
    // Calcular total y aplicar costes y descuentos
    const discount = getDiscount(discountType, subtotal);
    const discounted = subtotal - discount;
    const cartSize = getCartSize(discounted);
    const shipping = discounted < 50 ? 4.95 : 0;
    const total = discounted + shipping;
    // Comprobación por consola exigida para depuración
    console.log("Compra procesada con éxito para el cliente:", name);
    // Mostrar el resultado en la página
    const container = document.getElementById("result");
    container.innerHTML = generateResponse(name, discountType, products, subtotal, cartSize, discount, shipping, total);
});