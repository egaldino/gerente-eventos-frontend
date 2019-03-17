class ListagemPessoaController {

    preencherTableUsuarios(){
        this._table = document.querySelector("#tablePessoas");
        
        PessoaRestClient.listar().then((arrayPessoas)=> {
            arrayPessoas.forEach((pessoa) => {
                let tdNome = this._criarTd(pessoa.name);
                let tdTelefone = this._criarTd(pessoa.telefone);
                let tdEmail = this._criarTd(pessoa.email);

                let tr = document.createElement("tr");
                tr.appendChild(tdNome);
                tr.appendChild(tdTelefone);
                tr.appendChild(tdEmail);

                let tbody = document.createElement("tbody");
                tbody.appendChild(tr);

                this._table.appendChild(tbody);
            });
        });
    }

    _criarTd(conteudo){
        let td = document.createElement("td");
        td.textContent = conteudo;
        return td;
    }
    
}