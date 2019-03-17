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
        console.log(inscricao);
    }

    _preenchePessoas (){
        let arrayPessoas = [
            new Pessoa('Edson', '1111111', 'edson@email.com'),
            new Pessoa('Outro', '2222222', 'outro@email.com')
        ];

        arrayPessoas.forEach((pessoa) => {
            let option = this._criarOption(pessoa.name, pessoa);
            this._selectPessoas.appendChild(option);
        });
    }

    _preencheEventos(){
        let arrayEventos = [
            new Evento("Retiro", "Teste", "Sitio", '2019-03-02', '2019-03-05')
        ];

        arrayEventos.forEach((evento) => {
            let option = this._criarOption(evento.titulo, evento);
            this._selectEventos.appendChild(option);
        });
    }

    _criarOption(texto, value){
        let option = document.createElement('option');
        option.textContent = texto;
        option.value = value;
        return option;
    }

}