//Sem construir array, precisa manipular várias variaveis dificultando e dando brechas a erros.
// let nota1 = 10
// let nota2 = 7.5
// let nota3 = 6.5
// let nota4 = 8

// let media = (nota1 + nota2 + nota3 + nota4)/4

//usando array para manipular vários objetos dentro da mesma variavel.
const nota = [10, 7.5, 6.5, 8]
//conta matemática deve ser feita da maneira correta, tendo adição e divisão por exemplo, os valores da adição entre parenteses e a divisão fora.
let media = (nota[0] + nota[1] + nota[2] + nota[3]) / nota.length
console.log(media)

// adicionando elementos ao array.
//Será inserido o novo elemento na última posição do array.

const notas = [10, 6, 8]
notas.push(7)
console.log(notas)
let media_adc = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media_adc)

// deletando elementos do array.
//este método retira o último elemento do array.

const notas_remov = [10, 7, 8, 5, 10]
notas_remov.pop()
console.log(notas_remov)

let media_remov = (notas_remov[0] + notas_remov[1] + notas_remov[2] + notas_remov[3]) / notas_remov.length
console.log(`A média é: ${media_remov}`)

//dividindo array

const nomes = ['João', 'Juliana', 'Ana', 'Zé Ramalho', 'Matheus', 'Giovana', 'Habynner', 'José', 'Luana', 'Tiago']

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Estes são os alunos da turma da 8º série A : ${sala1} .`)
console.log(`Sendo no total ${sala1.length} alunos na turma !`)
console.log(`Estes são os alunos da turma da 8º série B : ${sala2} .`)
console.log(`Sendo no total ${sala2.length} alunos na turma !`)

// Atualizando array.

const listaChamada = ['João', 'Juliana', 'Ana', 'Zé Ramalho', 'Matheus']
//retira dois elementos e adc outro.
//   listaChamada.splice(1,2,'Rodrigo')

//se não quiser remover nenhum, passe o 0 como segundo parametro do método.
listaChamada.splice(2,0,'Rodrigo')

console.log(`Lista atualizada: ${listaChamada}`)

//Desafio "juntando as salas"

const salaPython =  ['João', 'Juliana', 'Ana', 'Zé Ramalho', 'Matheus']
const salaJavaScript = ['Giovana', 'Habynner', 'José', 'Luana', 'Tiago']

const salasUnificadas = salaPython.concat(salaJavaScript)

console.log(salasUnificadas)

//lista com 2 dimensões.

const alunos = ['Zé Ramalho', 'Habynner', 'Luana', 'Tiago']
const mediaAlunos = [8, 10, 10, 7.5]

let listaDeNotasEalunos = [alunos, mediaAlunos]

console.log(`${listaDeNotasEalunos[0][2]} a sua media é ${listaDeNotasEalunos[1][2]}`)