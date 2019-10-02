var a = 30;


function foo(){
    
    var a = 20;
    console.log(a);
    foo2();
}

function foo2(){
    
    var a = 40;
    console.log(a);
}

//foo2();
foo();


var persona = {
    nombre : "juan",
    apellido : "perez",
    edad : 29,
    domicilio : {
        pais: "Argentina",
        localidad: "Avellaneda",
        direccion: {
            calle: "Av. Mitre",
            numero: 750
        }
    }
}


console.log(persona.nombre);
console.log(persona.domicilio.direccion);

for (const prop in persona) {
   
    console.log(prop + " : " + persona[prop]);
}