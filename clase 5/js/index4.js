let listaPersonas = [];

function Persona(nombre, apellido, edad, genero, maneja, nada, bici, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.maneja = maneja;
    this.nada = nada;
    this.bici = bici;
    this.pais = pais;

    this.saludar = function () {
        console.log("Hola soy " + this.nombre + " " + this.apellido + " " + " y tengo " + this.edad + " años");
    }

}


window.addEventListener('load', function () {
    //    var frm = document.getElementById('frmPersona');
    //    var frm = this.document.getElementsByTagName('form')[0];

    var frm = document.forms[0];

    frm.addEventListener('submit', manejarSubmit);
});

function manejarSubmit(e) {
    e.preventDefault();
    //   var frm = e.target;

    let nuevaPersona = traerPersona();

    console.log(nuevaPersona);

    listaPersonas.push(nuevaPersona);

    cargarFormulario(nuevaPersona);

    limpiarFormulario();

}


function traerPersona() {
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let edad = document.getElementById("txtEdad").value;

    let genero;
    if (document.getElementById("rdoMasculino").checked) {
        genero = "masculino";
    } else {
        genero = "femenino";
    }

    let maneja = document.getElementById("chkManeja").checked;
    let nada = document.getElementById("chkNada").checked;
    let bici = document.getElementById("chkBici").checked;
    let pais = document.getElementById("selPais").value;



    let nuevaPersona = new Persona(nombre, apellido, edad, genero, maneja, nada, bici, pais)
    return nuevaPersona;
}

function cargarFormulario(nuevaPersona) {

    document.getElementById("txtNombre2").value = nuevaPersona.nombre;
    document.getElementById("txtApellido2").value = nuevaPersona.apellido;
    document.getElementById("txtEdad2").value = nuevaPersona.edad;
    if (nuevaPersona.genero == "masculino") {
        document.getElementById("rdoMasculino2").checked = true;
    } else {
        document.getElementById("rdoFemenino2").checked = true;
    }
    document.getElementById("chkManeja2").checked = nuevaPersona.meneja;
    document.getElementById("chkNada2").checked = nuevaPersona.nada;
    document.getElementById("chkBici2").checked = nuevaPersona.bici;
    document.getElementById("selPais2").value = nuevaPersona.pais;


}


function limpiarFormulario() {


    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtEdad").value = "";
    document.getElementById("rdoMasculino").checked = true;
    document.getElementById("rdoFemenino").checked = false;
    document.getElementById("chkManeja").checked = false;
    document.getElementById("chkNada").checked = false;
    document.getElementById("chkBici").checked = false;
    document.getElementById("selPais").value = "ar";
}

