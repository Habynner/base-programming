//Extrair uma lista de outra, extrair lista de dependentes.
const Clients = [{
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
    },{
        nome:'Sthael Samara Silva',
        parentesco:'Filha',
        dataNasc:'01/12/1991',
        cpf:'02122547802',
        fone:'992331493'
    }]
},
{
    nome:'Francisco Ferreira',
    idade:65,
    cpf:'01265487922',
    email:'chico@outlook.com',
    fones:['985220103', '987456210'],
    dependentes: [{
        nome:'Conceição Ferreira Candido',
        parentesco:'Esposa',
        dataNasc:'15/05/1963',
        cpf:'02135698223',
        fone:'995236541'
    }],
}]

const listaDependentes = [...Clients[0].dependentes, ...Clients[1].dependentes];
console.log(listaDependentes)