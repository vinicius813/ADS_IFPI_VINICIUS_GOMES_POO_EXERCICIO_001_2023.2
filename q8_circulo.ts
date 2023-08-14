class Circulo {
    raio : number = 2;
    pi : number = 3.14;

    constructor (raio : number, pi : number) {
        this.raio = raio;
        this.pi = pi;
    }
}

function calcularArea() {
    return Math.pi * (this.raio ** 2);
}

function calcularPerimetro() {   // Comprimento da circunferência ou Perímetro é a mesma coisa.
    return 2 * (Math.pi * this.raio);
}

class TestaCirculo() {
    public teste() : void {
        const circulo : Circulo = new Circulo(2, 3.14);
        const areaCirculo = circulo.calcularArea();
        const perimetroCirculo = circulo.calcularPerimetro();

    console.log(`A nova área do meu círculo, criada a partir de uma nova classe, será de ${areaCirculo} metros quadrados.`);
    console.log(`O novo comprimento do meu círculo, criado a partir de uma nova classe, será de ${perimetroCirculo} metros.`);
    }
}

TestaCirculo.teste();