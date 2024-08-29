// função têm 2 momentos
// 1- declara a função.
                    //string
function imprimeTexto(texto){
    console.log(texto)
}

// 2- executa a função (1 ou mais vezes)

imprimeTexto("Hello world");
imprimeTexto("My name is Habynner Silva");

// existem 3 formas de se escrever funções.
//2) não recebe nada e retorna algo. o retorno deve vir sempre ao final da função.

function soma(){
    return 2 + 2;
}
console.log(soma())

//3) quando temos uma função chamando outra função.

imprimeTexto(soma());