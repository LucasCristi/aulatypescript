export class Negociacoes {
    constructor() {
        //                         Negociacao[]
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //          readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
