/*Public: propriedades públicas podem ser acessadas a qualquer momento em qualquer parte do código, 
ela é o tipo padrão do TS então não declarar nada é igual ao tipo público. Private: propriedades 
privadas só podem ser acessadas e modificadas através dos seus assessores (getters e setters). */

/* Getters e setters são usados para proteger seus dados, especialmente na criação de classes. 
Para cada instância de variável, um método getter retorna seu valor, enquanto um método setter 
o define ou atualiza. */

// Classe Retângulo
class Retangulo {
    private largura : number = 8;
    private altura : number = 4;

    constructor(largura : number, altura : number) {
        this.largura = largura;
        this.altura = altura;
    }
}

calcularArea() {
    return this.largura * this.altura;
}

calcularPerimetro() {
    return 2 * (this.largura * this.altura);
}

class TestaRetangulo {
    public main() : void {
        const retangulo : Retangulo = new Retangulo(8, 4);
        const area = retangulo.calcularArea();
        const perimetro = retangulo.calcularPerimetro();

    console.log(`A área do meu retângulo será de ${area} metros quadrados.`);
    console.log(`O meu perímetro será de tantos ${perimetro} metros.`);
    }
}

TestaRetangulo.main();