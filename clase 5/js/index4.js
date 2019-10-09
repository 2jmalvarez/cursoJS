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
    var frm = e.target;

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


    

    let nuevaPersona = new Persona(nombre, apellido, edad, genero, maneja, nada, bici, pais);

    listaPersonas.push(nuevaPersona);

    console.log(nuevaPersona);


    document.getElementById("txtNombre2").value = nuevaPersona.nombre;

}


