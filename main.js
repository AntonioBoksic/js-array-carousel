// seleziono gli item per poterli gestire
const items= document.querySelectorAll(".item")
console.log(items)

// questo mi dà comeoutput una NODE LIST con 5 elementi dentro
// questo sarebbe un oggetto simile ad un array
// qual è la differenza?

// setto un indice per segnare l'item attivo al momento
let activeItem = 0

// seleziono next
const next = document.querySelector(".next")
console.log(next)

// gestisco l'evento sul click su next

next.addEventListener("click",
function() {
console.log("hai cliccato");
// togli classe active all'elemento attivo
items[activeItem]
}
);