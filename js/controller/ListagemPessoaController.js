class ListagemPessoaController {

    preencherTableUsuarios(){
        this._table = document.querySelector("#tablePessoas");
        
        PessoaRestClient.listar().then((arrayPessoas)=> {
            arrayPessoas.forEach((pessoa) => {
                let tdNome = HtmlUtils.criarTd(pessoa.name);
                let tdTelefone = HtmlUtils.criarTd(pessoa.telefone);
                let tdEmail = HtmlUtils.criarTd(pessoa.email);

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
}