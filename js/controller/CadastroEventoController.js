class CadastroEventoController {

    constructor(){
        this._inputTitulo = document.querySelector('#titulo');
        this._inputDescricao = document.querySelector('#descricao');
        this._inputLugar = document.querySelector('#lugar');
        this._inputInicio = document.querySelector('#inicio');
        this._inputFim = document.querySelector('#fim');

    }

    acaoSalvar(event){
        event.preventDefault();
        let titulo = this._inputTitulo.value;
        let descricao = this._inputDescricao.value;
        let lugar = this._inputLugar.value;
        let inicio = new Date(this._inputInicio.value);
        let fim = new Date(this._inputFim.value);

        EventoRestClient.salvar(new Evento(titulo, descricao, lugar, inicio, fim));

        alert(`"${titulo}" cadastrado com sucesso!`);

        this._inputTitulo.value = "";
        this._inputDescricao.value = "";
        this._inputLugar.value = "";
        this._inputInicio.value = "";
        this._inputFim.value = "";

    }
}