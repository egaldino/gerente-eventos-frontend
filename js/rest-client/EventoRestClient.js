class EventoRestClient {

    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static listar(){
        return RestClient.get('eventos');
    }

    static salvar(evento){
        return RestClient.post('evento', evento);
    }

    static addInscricao(inscricao){
         return RestClient.post('inscricoes', inscricao);
    }

}