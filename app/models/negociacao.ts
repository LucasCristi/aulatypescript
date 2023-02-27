export class Negociacao {

  //se declarar private ou public só precisamos do constructor 

  constructor(
    private _data: Date,
    //pode ser utilizado public readonly no lugar do private
    private _quantidade: number,
    private _valor: number
  ) {}

  get data(): Date {
    //criacao da const para evitar que seja utilizado métodos com o Date mesmo sendo private
    const data = new Date(this._data.getTime())
    return data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }
}
