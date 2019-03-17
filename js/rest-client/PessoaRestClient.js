class PessoaRestClient {

    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static listar(){
        return RestClient.get('pessoas');
    }

    static salvar(pessoa){
        return RestClient.post('pessoa', pessoa);
    }


}