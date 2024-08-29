class Cliente{
    constructor(nome,cpf,email,saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const adcClient = new Cliente('Habynner Silva', '02336694182', 'habynner.silva@gmail.com', 1500)
console.log(adcClient)
adcClient.exibirSaldo()