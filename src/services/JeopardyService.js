import axios from 'axios';

export class JeopardyService {

    url;
    client;

    constructor(url = 'http://jservice.io/api/random', client = axios.create()){
        this.url = url;
        this.client = client;
    }

    getQuestion(){
        return this.client.get(this.url);
    }

    getQuestions(numQuestions) {
        const preparedUrl = this.url + "?count="+numQuestions;
        return this.client.get(preparedUrl);
    }

}