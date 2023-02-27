export class Negociacao {
    //se declarar private ou public só precisamos do constructor 
    constructor(_data, 
    //pode ser utilizado public readonly no lugar do private
    _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        //criacao da const para evitar que seja utilizado métodos com o Date mesmo sendo private
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
