function mostrar()
{
//tomo la edad  

var edad = parseInt(document.getElementById("edad").value);



if (edad === 15)
{
    console.log(typeof edad);
    alert("niña bonita");
} else {
    alert("niña NO bonita");
}


}//FIN DE LA FUNCIÓN