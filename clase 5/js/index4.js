let listaPersonas = [];

//function Persona()


window.addEventListener('load', function () {
//    var frm = document.getElementById('frmPersona');
//    var frm = this.document.getElementsByTagName('form')[0];

    var frm = document.forms[0];

    frm.addEventListener('submit', manejarSubmit);
});

function manejarSubmit (e){
    e.preventDefault();
 //   var frm = e.target;
   console.log(frm);

}