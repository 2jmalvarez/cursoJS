window.addEventListener("load", () => {


    let selPaises = document.getElementById("selPaises")
    let selCiudades = document.getElementById("selCiudades")

    
    console.log("datos", datos);
    console.log(obtenerPaises(datos));
    
    selPaises.addEventListener("change",()=>{
        cargarSelect(selCiudades,obtenerCiudades(datos,selPaises.value));
        
    })
    
    cargarSelect(selPaises,obtenerPaises(datos));
    cargarSelect(selCiudades,obtenerCiudades(datos,selPaises.value));
    
});


function cargarSelect(select, arr) {
    
    let opcion
    
    limpiarSelect(select)

    arr.forEach(element => {
        opcion = document.createElement("option");
        let texto = document.createTextNode(element);

        opcion.appendChild(texto);
        opcion.setAttribute("value",element);

        select.appendChild(opcion)


    });

    


}


let obtenerPaises = arr => arr
    .map((elemento) => elemento.pais)
    .unique()
    .sort();



let obtenerCiudades = (arr, pais) => arr
    .filter((elemento) => elemento.pais === pais)
    .map((elemento) => elemento.ciudad)
    .unique()
    .sort();



Array.prototype.unique = function () {

    return [... new Set(this)]

}



function limpiarSelect (select){
    
    while (select.hasChildNodes())
    {
        select.removeChild(select.firstElementChild);
    }

}