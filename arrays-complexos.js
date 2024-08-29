// localizando dentro do array.
const alunos = ['Zé Ramalho', 'Habynner', 'Luana', 'Tiago']
const mediaAlunos = [8, 10, 10, 7.5]

let listaDeNotasEalunos = [alunos, mediaAlunos]

// será necessário criar uma função.

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEalunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEalunos[0].indexOf(nomeDoAluno)

        return `${listaDeNotasEalunos[0][indice]}, sua média é: ${listaDeNotasEalunos[1][indice]}`
    } else {
        return "Aluno não está matricula nesta turma."
    }
}
console.log(exibeNomeNota("Luana"))

//array e For classico.

const numeros = [100, 200, 300, 400, 500, 600]

for(let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i])
}

// mais que só um log com array e for. calcular média.
// for é um método que consegue percorrer cada um dos indices do array, até que a condição imposta para parar o loop seja estabelicida !
const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0

for(let a  of notas) {
    somaNotas += a
}

let media = somaNotas/notas.length

console.log(media)

// calcular média agora com foreach.
//função callback. "foreach" - significa "para cada", no exemplo abaixa, para cada nota soma a seguinte e guarda o valor.
const notas2 = [10, 6.5, 8, 7.5]

let somaNotas2 = 0

notas2.forEach( nota => {
    somaNotas2 += nota
})

let media2 = somaNotas/notas2.length

console.log(media2)

// Array com loop e adição de infos no array.

const notas3 = [10, 9, 8, 7, 6]
//vamos usar operador ternário para comparar se nota3 for =10 ele não soma mais 1 ao valor do objeto no array.
// usando o ++ antes do objeto, ele vai somar em todas as posições mais 1, desde que se encaixe na condição.
const notasAtualizadas = notas3.map( notas3 => notas3 == 10 ? notas3 : ++notas3)

console.log(notasAtualizadas)

//padronizar nomes de um array, usando o map. deixando todas as letras maiúsculas.

let nome = ["Habynner Silva", "Luana ferreira", "matheus RAMOS", "calebe Souza"]

const nomeAtualizado = nome.map(nome => nome.toUpperCase())

console.log(nomeAtualizado)

//método de filtro dentro de um array.

const alunos1 = ['Zé Ramalho', 'Habynner', 'Luana', 'Tiago']
const mediaAlunos1 = [5.5, 9.5, 10, 6.5]

const reprovados = alunos1.filter( (aluno, indice) => mediaAlunos1[indice] < 7)

console.log(`alunos reprovados: ${reprovados}`)

// média geral de 3 arrays diferentes.

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10,7]
const salaJava = [6, 5, 8, 9,5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){
const somaDasNotas = notasDaSala.reduce((acum, atual) =>
atual + acum, 0)
return somaDasNotas/notasDaSala.length
}
console.log(`Média da sala de JavaJcript ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)

const notasTurma = [10, 6.5, 8, 7.5]

const calculaMedia = notasTurma.reduce((acum, atual) => atual + acum,0) /notasTurma.length
console.log(calculaMedia)