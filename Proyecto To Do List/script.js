/* let inputAgregar = document.querySelector('.input');
let botonAgregar = document.querySelector('.boton-agregar');
let container = document.querySelector('.container');
 */
class Item {

  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea)
  }

  crearDiv(nuevaTarea) {

    let nuevoDiv = document.createElement("div")
    nuevoDiv.className = "item"
    let inputItem = document.createElement("input")
    inputItem.type = "text"
    inputItem.classList.add("item-input")
    inputItem.disabled = true
    inputItem.value = nuevaTarea
    this.inputItem = inputItem
    nuevoDiv.appendChild(inputItem)

    // BOTON EDITAR

    let botonEditar = document.createElement("button")
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
    botonEditar.classList.add('boton-editar')
    nuevoDiv.appendChild(botonEditar)
    
    // EVENTO BOTON EDITAR

    botonEditar.addEventListener("click", function(){
      inputItem.disabled = !inputItem.disabled

      if (inputItem.disabled) {
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
      }
      else{
        botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>" 
      }
    })

    // BOTON REMOVER

    let botonRemover = document.createElement("button")
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
    botonRemover.classList.add('boton-remover')
    nuevoDiv.appendChild(botonRemover)

    // EVENTO BOTON REMOVER

    botonRemover.addEventListener("click", function(){
      nuevoDiv.remove()
    })
    let container = document.querySelector(".container")
    container.appendChild(nuevoDiv)

  }
}


function chequearInput() {
  
  let inputAgregar = document.querySelector(".input");
  let tarea = inputAgregar.value

  if (tarea !== " ") {
    new Item(tarea)
    inputAgregar.value = " "
  }
}

let botonAgregar = document.querySelector(".boton-agregar")
botonAgregar.addEventListener("click", chequearInput)


/* let botonEditar = document.createElement('button')
botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
botonEditar.classList.add('boton-editar') */

/*  botonEditar.classList.add(innerHTML= "<i class='fas fa-lock'></i>") */

/* let botonRemover = document.createElement('button')
botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
botonRemover.classList.add('.boton-remover') */

/*   botonRemover = document.classList.add(innerHTML= "<i class='fas fa-trash'></i>") */