$(document).ready(function(){ 
//Esto es equivalente al addEventListener Load del JS
    $('#btn1').click(function(){
    //Los manejadores de eventos tienen que ir adentro del ready (como en JS adentro el Load)
    //El numeral hace referencia al id
       $('th').attr('style', 'background-color:lightblue');
       $('td').css({'color':'green', 'font-size':'20px'});
       
    });
    $('#btn2').click(function(){
    
        console.log($('th').attr('style') + ' ' +$('td').css('color'));
    });
    $('#btn3').click(function(){
        $('th').removeAttr('style');
        $('td').removeAttr('style');
    });
    
});

function cambiarTexto(){
    $('h1').text('Hola JQuery');
    //La fucni
}

function mostrarTexto(){
    console.log($('h1').text());
      
}