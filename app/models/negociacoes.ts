import { Negociacao } from "./negociacao";

export class Negociacoes {
  //                         Negociacao[]
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }
 //          readonly Negociacao[]
  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}
