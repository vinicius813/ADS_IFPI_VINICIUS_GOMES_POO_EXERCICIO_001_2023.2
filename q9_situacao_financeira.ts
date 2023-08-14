class SituacaoFinanceira {
    valorCredito : number = 300;
    valorDebito : number = 500;

    constructor (valorCredito : number, valorDebito : number) {
        this.valorCredito = valorCredito;
        this.valorDebito = valorDebito;
    }
}

function calcularSaldo() {
    return (this.valorCredito - this.valorDebito);
}

// Tenho agora que instanciar minha classe Situação Financeira.
class Financas {
    const situacao : SituacaoFinanceira = new SituacaoFinanceira(1300, 1500);
    const saldo = this.situacao.calcularSaldo();

    console.log(`O meu novo saldo será de R$ ${this.saldo}.`);
}

// Fim