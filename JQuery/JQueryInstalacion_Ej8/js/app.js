$(document).ready(function(){ 
    $('h1').mouseover(function(){
        $(this).attr('style','color:blue');
    });
    
    $('h1').mouseout(function(){
        $(this).removeAttr('style');

    });

    $('p').hover(mouseIn, mouseOut);
    
    $('#txtNombre').focus(function(){
        $(this).val('');

    });    
    $('#txtNombre').blur(function(){
        console.log($(this).text().length);

        if($(this).text().length===0){
            $(this).val("Buscalooo...");
        }

    });    

    $('#btn1').click(function(){
        $('p').fadeOut("slow");
    });
    $('#btn2').click(function(){
        $('p').fadeIn("slow");
    });
    $('#btn3').click(function(){
        $('p').toggle("slow");
    });

});
    
function mouseIn(){
    $(this).css('color', 'red');
}
function mouseOut(){
    $(this).css('color', 'black');
}
