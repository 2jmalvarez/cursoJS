const appkey = "edae6903e08bf1bd7c4a8afcc3c45053"

window.addEventListener("load", function() {
  cargarSelectCiudades();


  document.getElementById("selCiudades").addEventListener("change",traerPronosticos)
});

function cargarSelectCiudades() {
    TraerCiudades()
    
    




}

function TraerCiudades() {
  //ajax json city.list

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      //   document.getElementById("loader").innerHTML = ""
      if (xhr.status == 200) {
        //codigo cuando una peticion termina y es correcta
        let datos = JSON.parse(xhr.responseText)
        let ciudades = parsearArgentinas(datos)
        AtualizarSelect(ciudades)

        

        
         

      } else {
        // codigo cuando se ejecuta un error
        console.error(xhr.status + " : " + xhr.statusText);
      }
    } else {
      //codigo para procesar una peticion
      // let span = document.getElementById("loader")
      // span.innerHTML = "<img src='./js/images/safe_image.gif'></img>";
    }
  }

  xhr.open("GET", "./city.list.json", true);

  xhr.send();
}

function parsearArgentinas(arr) {

    return arr.filter(ciudad => ciudad.country === "AR")
    .map(ciudad => ({ id: ciudad.id, nombre: ciudad.name + ", " + ciudad.country}) )
    .sort( (a,b) => a.name > b.name?-1:1)

   
}




function AtualizarSelect(ciudades){
    let selCiudades = document.getElementById("selCiudades")
    for (ciudad of ciudades){
        let opcion = document.createElement("option")
        opcion.setAttribute("value", ciudad.id )
        let texto = document.createTextNode(ciudad.nombre)
        opcion.appendChild(texto);
        selCiudades.appendChild(opcion);
    }
}


function traerPronosticos() {

    let xhr = new XMLHttpRequest();
    let divAct = document.getElementById("act")
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        //   document.getElementById("loader").innerHTML = ""
        if (xhr.status == 200) {
          //codigo cuando una peticion termina y es correcta
          let pronostico = JSON.parse(xhr.responseText)
          divAct.innerText = ""
            ActualizarPronostico(pronostico)
          
        //    console.log(pronostico);
        //    console.log(pronostico.main.temp);
          //document.getElementById("info").innerText = xhr.responseText
          //document.getElementById("temperatura").innerText  =" Temperatura: " +  pronostico.main.temp + " Cº"
  
          
          
  
        } else {
          // codigo cuando se ejecuta un error
          console.error(xhr.status + " : " + xhr.statusText);
        }
      } else {
          
          divAct.innerHTML = "<img src='./images/anemometro.gif' />"
        //codigo para procesar una peticion
        // let span = document.getElementById("loader")
        // span.innerHTML = "<img src='./js/images/safe_image.gif'></img>";
      }
    }
  
    xhr.open("GET", armarURL(), true);
  
    xhr.send();

  }


  function armarURL(){
    let idCiudad = document.getElementById("selCiudades").value
    let url = "https://api.openweathermap.org/data/2.5/weather?id="+ idCiudad + "&lang=es&units=metric&APPID=" + appkey
    return url

  }



function ActualizarPronostico(pronostico){

document.getElementById("temperatura").innerText  =" Temperatura: " +  pronostico.main.temp.toFixed(1) + " Cº"
document.getElementById("humedad").innerText  =" Humedad: " +  pronostico.main.humidity + " %"
document.getElementById("presion").innerText  =" Presión: " +  pronostico.main.pressure + " hPa"
document.getElementById("viento").innerText  =" Viento: " +  (pronostico.wind.speed * 3.6).toFixed(0)+ " Km/h"
document.getElementById("descripcion").innerText  =" Se espera " +  pronostico.weather[0].description
document.getElementById("minmax").innerText  =" Máxima: " + pronostico.main.temp_max.toFixed(1) + " °C / Minima: "+ pronostico.main.temp_min.toFixed(1) + "° C " 
document.getElementById("imagen").setAttribute("src","http://openweathermap.org/img/w/" + pronostico.weather[0].icon + ".png")
document.getElementById("imagen").setAttribute("style","width:90px")
document.getElementById("ciudad").innerText = pronostico.name



let fecha  = traerFecha()
document.getElementById("act").innerText = fecha.toLocaleDateString() + " "+ fecha.toLocaleTimeString()
}


function traerFecha (){
    let fecha = new Date();

    // console.log(fecha);
    
    return fecha;

}