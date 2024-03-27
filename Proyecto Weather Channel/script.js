let formulario = document.getElementById("formulario")
let ciudad = document.getElementById("input")


function cargarCiudad() {
    
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad.value + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es.", function(data) {
    console.log(data)
    document.querySelector(".container").style.visibility = "visible"
    document.querySelector("#ciudad").textContent = data.name 
    document.querySelector("#temperatura").innerHTML = data.main.temp + "<sup>°C</sup>"
    const icono = data.weather[0].icon 
    const url = `http://openweathermap.org/img/wn/${icono}.png` 
    document.querySelector("#wicon").src = url;
    const descripcion = data.weather[0].description
    document.querySelector("#descripcion").textContent = descripcion

    })

    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown) 
        alert('La ciudad no existe'); 
})

};


/* function validacion() {
    if (ciudad.value == null || ciudad.value == "") {
        alert("debe escribir una ciudad")
    
    }
} */




document.getElementById("boton").addEventListener("click", () => {
    if (ciudad.value == null || ciudad.value == "") {
        alert("debe escribir una ciudad")
    } else {
        cargarCiudad()
    formulario.reset()
    }
    /* validacion() */
    
});