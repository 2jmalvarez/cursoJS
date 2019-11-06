window.addEventListener('load', function(){

    let form = this.document.forms[0];

    form.addEventListener('submit', function(e){
        e.preventDefault();

        enviarDatos();

    });
});

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
    spinner.setAttribute('src', './images/smile.gif');
    return spinner;
}



function crearTabla(arr) {

    let tabla = document.createElement("table");
    let encabezado = document.createElement("tr");

    for (prop in arr[0]) {

        let th = document.createElement("th");
        th.setAttribute("style", "background:lightblue");
        th.textContent = prop.toUpperCase();
        encabezado.appendChild(th);
    }

    tabla.appendChild(encabezado);


    for (i=0 ; i< arr.length;i++){
    //for (i in arr) {
        let fila = document.createElement("tr");
        for (prop in arr[i]) {
            let celda = document.createElement("td");
            if (i % 2)
                celda.setAttribute("style", "background: rgb(200,200,200)");
            celda.textContent = arr[i][prop];
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    // tabla.setAttribute("border", "1px solid black");
    // tabla.setAttribute("style", "border-collapse:collapse");
    tabla.setAttribute("class", "table");
    return tabla;

}