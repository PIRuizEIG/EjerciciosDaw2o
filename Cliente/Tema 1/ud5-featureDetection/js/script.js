const salida = document.getElementById("salida");
if ("geolocation" in navigator) {
    salida.textContent = "El navegador permite usar geolocalización.";
} else {
    salida.textContent = "Este navegador no ofrece geolocalización.";
}
if (typeof localStorage !== "undefined") {
    console.log("localStorage disponible");
} else {
    console.log("localStorage no disponible");
}