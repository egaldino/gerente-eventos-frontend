class InscricaoController {

    constructor(){
        this._selectEventos = document.querySelector('#selectEventos');
        this._selectPessoas = document.querySelector('#selectPessoas');
    }

    preencheSelects(){
        this._preencheEventos();
        this._preenchePessoas();
    }

    realizarInscricao(event){
        event.preventDefault();
        let inscricao = new Inscricao();
        inscricao.evento = this._selectEventos.options[this._selectEventos.selectedIndex].value;
        inscricao.pessoa = this._selectPessoas.options[this._selectPessoas.selectedIndex].value;
        inscricao.dataInscricao = new Date();

        EventoRestClient.addInscricao(inscricao);
        alert("Inscricao realizada com sucesso");
    }

    _preenchePessoas (){
        PessoaRestClient.listar().then((arrayPessoas)=> {
            arrayPessoas.forEach((pessoa) => {
                let option =  HtmlUtils.criarOption(pessoa.name, pessoa._id);
                this._selectPessoas.appendChild(option);
            });
        });

        
    }

    _preencheEventos(){
        EventoRestClient.listar().then((arrayEventos)=> {
            arrayEventos.forEach((evento) => {
                let option = HtmlUtils.criarOption(evento.titulo, evento._id);
                this._selectEventos.appendChild(option);
            });
        });
    }
}