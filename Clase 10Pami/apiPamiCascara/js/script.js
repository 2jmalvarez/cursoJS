const appKey = "edae6903e08bf1bd7c4a8afcc3c45053"

let ciudad
let presion
let temperatura
let humedad
let viento
let minmax
let descripcion
let imagen
let ultimaAct




function enviarDatos(){
    let info = document.getElementById('info');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if( xhr.readyState == 4){

            if( xhr.status == 200){

                console.log( typeof xhr.responseText);
                // let Ironman = JSON.parse(xhr.responseText);
                
                // info.innerText = Ironman.nombre + " "+ Ironman.apellido;

                let Personas = JSON.parse(xhr.responseText);

                if(info.hasChildNodes())
                info.removeChild(info.lastChild)

                info.appendChild(crearTabla(Personas))
            }
            else{
                info.innerText = xhr.status + ' : ' + xhr.statusText;
            }
        }
        else{
            if(!info.hasChildNodes())
            info.appendChild(crearSpinner());

        }        
    }     

    xhr.open('GET',  'pagina1.php');   

    xhr.send();
}


function crearSpinner(){
    let spinner = document.createElement('img');
    spinner.setAttribute('src', '.\images\anemometro.gif');
    return spinner;
}
