class Equipo {
    constructor(nombre){
        this.nombre =  nombre;
    }
    jugar (nombre2) {
        this.nombre2 = nombre2;
        console.log(`${this.nombre2} esta jugando contra ${this.nombre}`)
    }
    get nombreDelEquipo() {
        return this.nombre;
    }
    set nombreDelEquipo(nombre3) {
        this.nombre = nombre3;
    }
}
Equipo.prototype.entrenar = function() {
    console.log(`${this.nombre} esta entrenando`);
}
const bulls = new Equipo("Chicago Bulls");
bulls.jugar("Edgar");
bulls.entrenar();


bulls.nombreDelEquipo = "Celtics";
console.log(bulls.nombreDelEquipo);
console.log(bulls.nombre);
