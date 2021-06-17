let listaDesordenada = document.querySelector("ul");

let textos = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10",
]

for(let contador = 0; contador < textos.length; contador++) {
    let item = document.createElement("li");
    let texto = document.createTextNode(textos[contador]);
    item.setAttribute("type", "none")
    item.appendChild(texto);
    listaDesordenada.appendChild(item);
}

let primerItem = document.querySelector("li");
console.log(primerItem.getAttribute("type"))
