function mostrar()
{
//tomo la edad  
var edad = parseInt(document.getElementById("edad").value);

if (edad >=18)
{
    //console.log(typeof edad);
    alert("Mayor de edad");
} else if ( edad >=13 && edad <= 17)
{
    alert("Adolecente");
}else {alert("Menor");}


}//FIN DE LA FUNCIÓN