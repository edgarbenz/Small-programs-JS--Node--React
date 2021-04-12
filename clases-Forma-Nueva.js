class Equipo {
    constructor(nombre){
        this.nombre =  nombre;
    }
    jugar (nombre2) {
        this.nombre2 = nombre2;
        console.log(`${this.nombre2} esta jugando contra ${this.nombre}`)
    }
}
Equipo.prototype.entrenar = function() {
    console.log(`${this.nombre} esta entrenando`);
}
const bulls = new Equipo("Chicago Bulls");
bulls.jugar("Edgar");
bulls.entrenar();
