// const pessoas = ["Fulano", "Ciclano", "Beltrano"]

// //Adicionar um item ao final do array
// pessoas.push("Caio")

// //Remover o último item do array
// pessoas.pop()

// //Adicionar um item na primeira posição do array
// pessoas.unshift("Caio")

// //Remover o primeiro item do array
// pessoas.shift()

// //Atualizar o valor de um array
// pessoas[1] = "Caio"

//console.log(pessoas)

// pessoas.forEach(
//     function passarNomes(pessoa){
//         console.log(`Olá ${pessoa.toLowerCase()}`)
//     }
// )

// pessoas.forEach(pessoa => console.log(`Olá ${pessoa.toLowerCase()}`))

// function vaiCorinthians(){
//     return pessoas.map(pessoa => pessoa + " Vai Corinthians")
// } 

// console.log(vaiCorinthians())

//DOBRAR NUMEROS
// const numeros = [1,2,3]

// function dobra(){
//     return numeros.map(numero => numero * 2)
// }

// console.log(dobra())
// numeros.map(numero => console.log(`${numero * 2}`))

//UPPER CASE
// const pessoas = ["Fulano", "Ciclano", "Beltrano"]

// pessoas.forEach(pessoa => console.log(`${pessoa.toUpperCase()}`))

const filmes = [
    {nome:"Gente Grande",diretor:"Adam Sandler",ano:2012},
    {nome:"Todo mundo em pânico",diretor:"Michael Jackson",ano:2005},
    {nome:"Meninas Malvadas",diretor:"Lindsay Lohan",ano:2002}
]

console.log(filmes.map(filme => filme.nome))
console.log(filmes.filter(filme => filme.ano>2006))