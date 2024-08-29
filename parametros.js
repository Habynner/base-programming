// Parametros de função.

function soma(num1, num2){

    return num1 + num2;
}
console.log(soma(3, 5))
console.log(soma(30, 20))
console.log(soma(-30, 50))
//importante lembrar que os parametros tem uma ordem (em casos de operação matematica isso pode fazer ainda mais diferença).

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome}, e tenho ${idade} anos.`
}
console.log(nomeIdade("Habynner", 28))

// usando uma função dentro de outra função.

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplica(soma(2, 3), soma(5, 5)))

function cumprimentar() {
    return 'Bom dia pessoal!';
}

console.log(cumprimentar() + " " + nomeIdade("Habynner", 28))

function seApresentarPraGrupo(Texto) {
    return `${Texto}, ${cumprimentar()} ${nomeIdade("Habynner", 28)}`;
}
console.log(seApresentarPraGrupo("Olá"))