function Avenger(nombre,nombreReal,poder){
    this.nombre = nombre;
    this.nombreReal = nombreReal;
    this.poder = poder
    this.salud = 100;

    this.status = function(){
        console.log(this.nombre + " Salud: "+ this.salud + " Poder: " + this.poder);
    }


    this.curar = function (amigo){
        if (this.poder > 40)
        {
            amigo.salud += 20;
            this.poder -=40; 
        }
    }

    this.atacar = function (malo){
        malo.salud -= 50;

    }
}


var Ironman = new Avenger("Ironman","Tony",1000);
var Capitan = new Avenger("Capitan","Steve",500);

var Thanos = new Avenger("Thanos","Thanos",1500);

Ironman.status();
Capitan.status();
Thanos.status();

Ironman.atacar(Thanos);
Thanos.status();
