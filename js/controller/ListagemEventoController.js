class ListagemEventoController {

    preencherTableEventos(){
        this._table = document.querySelector("#tableEventos");
        
        EventoRestClient.listar().then((arrayEventos)=> {
            arrayEventos.forEach((evento) => {
                let tdTitulo = HtmlUtils.criarTd(evento.titulo);
                let tdInicio = HtmlUtils.criarTd(evento.inicio);
                let tdFim = HtmlUtils.criarTd(evento.fim);

                let tr = document.createElement("tr");
                tr.appendChild(tdTitulo);
                tr.appendChild(tdInicio);
                tr.appendChild(tdFim);

                let tbody = document.createElement("tbody");
                tbody.appendChild(tr);

                this._table.appendChild(tbody);
            });
        });
    }
}