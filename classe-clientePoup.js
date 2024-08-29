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
class ClientePoup extends Cliente{
    constructor(nome,cpf,email,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }
    depositarPoup(valor){
        this.saldoPoup += valor
    }
}
const adcClient = new ClientePoup('Habynner Silva', '02336694182', 'habynner.silva@gmail.com', 1500, 200)
console.log(adcClient)
adcClient.exibirSaldo()

adcClient.depositar(4250)
console.log(adcClient)
adcClient.depositarPoup(1000)
console.log(adcClient)