window.addEventListener("load", function () {
    let divTabla = document.getElementById("divTable");
    let tabla = crearTabla(autos);
    divTabla.appendChild(tabla);
});

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

    tabla.setAttribute("border", "1px solid black");
    tabla.setAttribute("style", "border-collapse:collapse");
    return tabla;

}
