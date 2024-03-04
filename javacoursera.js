let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment(){  //funcion del boton 1
    count += 1
    countEl.innerText= count
}

//// funcion del boton 2

function save(){ // crea una variable que contiene los datos
    let countStr = count + " - "
    saveEl.textContent += countStr
}

let parrafo = document.getElementById("miparrafo").innerText = "Nuevo texto";
console.log(parrafo);