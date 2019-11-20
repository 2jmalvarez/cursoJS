$(document).ready(function(){ 
//Esto es equivalente al addEventListener Load del JS
    $('#btn1').click(function(){
    //Los manejadores de eventos tienen que ir adentro del ready (como en JS adentro el Load)
    //El numeral hace referencia al id
        cambiarTexto();
    });
    $('#btn2').click(function(){
    
        mostrarTexto();
    });
    $('#btn3').click(function(){
        $('p').text('Hola JQuery');
    });
    
});

function cambiarTexto(){
    $('h1').text('Hola JQuery');
    //La fucni
}

function mostrarTexto(){
    console.log($('h1').text());
      
}