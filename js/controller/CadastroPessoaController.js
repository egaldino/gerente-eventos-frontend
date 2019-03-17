class CadastroPessoaController {

    constructor(){
        this._inputNome = document.querySelector('#nome');
        this._inputTelefone = document.querySelector('#telefone');
        this._inputEmail = document.querySelector('#email');
    }

    acaoSalvar(event){
        event.preventDefault();
        let nome = this._inputNome.value;
        let telefone = this._inputTelefone.value;
        let email = this._inputEmail.value;

        PessoaRestClient.salvar(new Pessoa(nome, telefone, email));

        alert(`${nome} cadastrado(a) com sucesso!`);

        this._inputNome.value = "";
        this._inputTelefone.value = "";
        this._inputEmail.value = "";

    }
}