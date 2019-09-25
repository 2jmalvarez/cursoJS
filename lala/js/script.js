window.addEventListener("load", () => {
    const boton = document.getElementById('btnCalcular');
    boton.addEventListener('click', calcular);
    let formulario = document.forms[0];
    formulario.style = "width: 350px";

});




function calcular() {

    let radio = document.getElementById("txtNombre").value;
    superficie = radio * radio * Math.PI;
    document.getElementById("txtSuperficie").value = superficie.toFixed(2);

}