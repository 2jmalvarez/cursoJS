function Persona(nombre,apellido,edad){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;



}

function saludar (){
    console.log("Hola "+this.nombre+" "+this.apellido);
}

Persona.prototype.saludar = saludar;

x = new Persona("juan","perez",30);

x.genero = "lala";

y =  new Persona("jose","gomez",40);

Persona.prototype.direccion;

z =  new Persona("raul","gomez",20);