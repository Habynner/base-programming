// função de forma classica.
function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, e tenho ${idade} anos.`
}
console.log(nomeIdade("Habynner", 28))

// função no formato arrow =>

//com 1 parametro
const apresentarArrow = nome => `Meu nome é ${nome}`;
//com 2 parametros
const soma = (num1, num2) => num1 + num2;
console.log(soma(4, 5))

// Arrow function com +  de 1 linha de instrução (precisa também de chaves para que o bloco de codigo fique lá dentro).

const somaNumeros = (num1, num2) => {
    if (num1 && num2 > 10) {
        return "Somente numeros menores que 10"
    } else {
        return num1 + num2;
    }
}
console.log(somaNumeros(9, 9))