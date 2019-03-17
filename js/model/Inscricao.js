class Inscricao {

    constructor(){
        this._evento;
        this._pessoa;
        this._dataInscricao;
    }

    get evento(){
        return this._evento;
    }
    set evento(evento){
        this._evento = evento;
    }

    get pessoa(){
        return this._pessoa;
    }
    set pessoa(pessoa){
        this._pessoa = pessoa;
    }

    get dataInscricao(){
        return this._dataInscricao;
    }
    set dataInscricao (dataInscricao){
        this._dataInscricao = dataInscricao;
    }

}