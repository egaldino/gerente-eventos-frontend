class HtmlUtils {

    constructor(){
        throw new Error("Essa classe não pode ser instaniada");
    }

    static criarTd(conteudo){
        let td = document.createElement("td");
        td.textContent = conteudo;
        return td;
    }
    
    static criarOption(texto, value){
        let option = document.createElement('option');
        option.textContent = texto;
        option.value = value;
        return option;
    }
    
}