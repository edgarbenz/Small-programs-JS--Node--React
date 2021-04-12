function Equipo(nombre) {
    this.nombre = nombre; //this hace referencia a la funcion
    this.jugar = function (nombre2) {
        this.nombre2= nombre2;
        console.log(`${this.nombre2} esta jugando contra ${this.nombre}`);
    }
}

Equipo.prototype.entrenar = function() { // la funcion entrenar bien podria ir en la definicion de la clase Equipo pero esta es una forma de definirla afuera
    console.log(`${this.nombre} esta entrenando`);
}
Equipo.prototype.apellido =  "Benzor"; // agrego una propiedad al metodo

const bulls = new Equipo("Chicago Bulls");
bulls.jugar("Edgar");
bulls.entrenar();
console.log(bulls.apellido);