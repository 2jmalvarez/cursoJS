$(document).ready(function(){ 
    //Esto es equivalente al addEventListener Load del JS
        $('#btn1').click(function(){
        //Los manejadores de eventos tienen que ir adentro del ready (como en JS adentro el Load)
            let formulario = "<form><label for='txtNombre'>Nombre:</label><input type='text' id='txtNombre'><br></form>"
            $('#divFrm').html(formulario);//Inserta HTML
        });
        $('#btn2').click(function(){
            console.log($('#divFrm').html());
            
            
        });
        $('#btn3').click(function(){
            $('p').removeClass('rojo');
        });
        
    });
    