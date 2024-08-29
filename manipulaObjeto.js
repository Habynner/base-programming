const Client = {
    nome:'Claudio de Deus da Silva',
    idade:56,
    cpf:'31671322134',
    email:'cds1963@outlook.com',
    fones:['995569142', '992365432'],
    dependentes: [{
        nome:'Mirian Silva',
        parentesco:'Esposa',
        dataNasc:'31/12/1963',
        cpf:'29747392100',
        fone:'992894074'
    }],
    //criando um método de deposito. utilizando função
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}
console.log(Client.saldo)
//vamos usar a função para adc valor ao saldo do cliente.
Client.depositar(50)
console.log(Client.saldo)
////console.log(Client);
//adcionando elementos ao array de dependentes, dentro do objeto Client.

Client.dependentes.push({
    nome:'Sthael Samara Silva',
    parentesco:'Filha',
    dataNasc:'01/12/1991',
    cpf:'02122547802',
    fone:'992331493'
})
////console.log(Client);
// Fazendo filtro dentro do array.
const filtro = Client.dependentes.filter(dependente => dependente.cpf === '02122547802');
console.log(`Buscando informações da ${filtro[0].nome} que é ${filtro[0].parentesco} do senhor ${Client.nome}. Segue todas as infomações sobre
o/a dependente: `, filtro);
//console.log(filtro)

// Percorrer Objeto usando "For in".

let relatorio="";
// para cada info do cliente exibir no relatorio a info (nome, cpf, idade...)
for ( let info in Client){
    //fazer uma verificação utilizando "typeof", para verificar o tipo de dado.
    if(typeof Client[info] === "object" || typeof Client[info] === "function"){
        continue
    }else{
    relatorio += `
    - ${Client[info]}
    `
    }
}
console.log(relatorio)

// Verificar se o Client possui uma chave de "dependentes", caso tenha, oferecer um seguro para ele.
// usar método do Js "Object.keys", ele trás todas as chaves do objeto (nome, idade, cpf...)
function oferecerSeguro(obj){
const propClient = Object.keys(obj);
if(propClient.includes("dependentes")){
    console.log(`Notamos que você possui dependentes.
Gostariamos de fazer uma oferta de seguro de vide para o Senhor ${obj.nome}`)
}
}
oferecerSeguro(Client)
//outros métodos de array Object.values - trás a lista dos valores, sem as chaves
/// console.log(Object.values(Client))
//outros métodos de array Object.entries - trás uma lista com varios todos os valores do objeto, concatena chave e valor em varios arrays.
/// console.log(Object.entries(Client))
