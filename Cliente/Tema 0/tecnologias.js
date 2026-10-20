let tecnologias = ["HTML", "CSS", "JavaScript"];

tecnologias.push("DOM");
tecnologias.push("Java");
tecnologias.push("Vaadin");

let html = "";

for (let i = 0; i < tecnologias.length; i++) {
    html += "<li>" + tecnologias[i] + "</li>";
}

document.getElementById("lista").innerHTML = html;