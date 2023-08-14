class Pessoa {
    nomeCliente : string = 'Vinícius';
    cpf : string = '12345';
/* No caso de CPF e CNPJ, estes não sofrem operações aritméticas(normalmente) e são tratados como tipos de dado
alfanumérico (char, varchar) desde de seus algoritmos de validação, que por definição os consideram cadeias de 
caracteres de tamanhos fixos. Por isso CPF é do tipo string e não number. */

constructor(nomeCliente : string, cpf : string) {     /* Uma instanciação ou constructor é o nome dado para um método especial dentro de uma classe 
                                                      que é automaticamente executado sempre que um novo objeto é criado a partir dessa classe. */
        this.nomeCliente = nomeCliente;
        this.cpf = cpf;
    }
}

class ContaBancaria {
    idConta : number = 7651;
    saldo : number = 2000;
    titular : string = 'Vinícius';

    constructor(idConta : number, saldo : number, titular : string) {
        this.idConta = idConta;
        this.saldo = saldo;
        this.titular = titular;
    }
}

function depositar(quantia : number = 150) {
    this.saldo += quantia;
    console.log(`Depósito de ${quantia} realizado com sucesso. Com isso, meu novo saldo será de ${this.saldo}.`);
}

function sacar(nova_quantia : number = 85) {
    if (nova_quantia <= this.saldo) {
        this.saldo -= nova_quantia;
        console.log(`Com isso, o saque no valor de ${nova_quantia} foi realizado. E, também a atualização do meu saldo será agora de ${this.saldo}.`);
    }else{
        console.log("Saldo insuficiente!");
    }
}

function consultarSaldo() {
    console.log(`Meu novo saldo será ${this.saldo}.`);
}

// Agora, irei criar um novo objeto chamado Pessoa.
let pessoa : Pessoa = new Pessoa('Guilherme', '263722');

// Também irei criar uma nova classe ContaBancaria associada ao objeto Pessoa.
let contaBancaria : ContaBancaria = new ContaBancaria(4444, 1850, 'Guilherme');

// Realizando operações na minha conta bancária:
contaBancaria.consultarSaldo();
contaBancaria.depositar(500);
contaBancaria.sacar(200);
contaBancaria.sacar(1500);

// Fim.





    


