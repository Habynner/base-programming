function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const adcClient = new Cliente('Habynner Silva', '02336694182', 'habynner.jeuel@gmail.com', 1000)
console.log(adcClient)
//Cliente poupança
//Aqui trabalhamos a herança, clientes da poupança herdam as propriedades do generico (nome,cpf,email,saldo).
function ClientePoupanca(nome,cpf,email, saldo, saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const adcClientPoup = new ClientePoupanca('Luana','02352187432', 'lucandido@gmail.com', 3000, 500)
console.log(adcClientPoup)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
adcClientPoup.depositarPoup(100)
console.log(adcClientPoup.saldoPoup)