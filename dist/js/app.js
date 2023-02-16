import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100)
// const negociacao = new Negociacao(new Date()) //erro intencional sem mencionar todos os dados
negociacao.qntidade = 3000 //erro intencional, add o valor na negociacao como uma nova informação 
console.log(negociacao)

console.log(negociacao)
