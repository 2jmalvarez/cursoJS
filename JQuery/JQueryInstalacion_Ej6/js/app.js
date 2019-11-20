$(document).ready(function(){ 
    //Esto es equivalente al addEventListener Load del JS
        $('#btn1').click(function(){
        //Los manejadores de eventos tienen que ir adentro del ready (como en JS adentro el Load)
        //El numeral hace referencia al id
           $('p').addClass('rojo');
           //Es lo mismo que: 
           //$('p').attr('class', 'rojo');
           
        });
        $('#btn2').click(function(){
            console.log($('p').attr('class'));
            
            
        });
        $('#btn3').click(function(){
            $('p').removeClass('rojo');
        });
        
    });
    
    function cambiarTexto(){
        $('h1').text('Hola JQuery');
        //La fucni
    }
    
    function mostrarTexto(){
        console.log($('h1').text());
          
    }
    