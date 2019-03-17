const restUrl = appProperties.restUrl;

class RestClient {

    constructor(){
        throw new Error("Essa classe não pode ser instanciada");
    }

    static get(uri){
        return fetch(restUrl + "/" + uri)
        .then(data=>{return data.json()})
        .catch(error=>{console.log(error)});
    }

    static post(uri, object){
        let postParams = {
            mode: 'cors',
            body: JSON.stringify(object),
            headers: { 
                "Content-Type" : "application/json; charset=UTF-8"
            },
            method: "POST"
        }
        
        fetch(restUrl + "/" + uri, postParams)
        .then(data=>{return data.json()})
        .catch(error=>{console.log(error)});
    }
}