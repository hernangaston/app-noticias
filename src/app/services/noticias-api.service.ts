import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* 
new york times
App ID
197552dc-a162-4080-ae07-0ecf8e510d74
api key = S3xqa9udfF8ZOljVMq3NYYWvZvLU4zvU

*/

const apiKey = '919c86a52b0a4e4e9e8af565774a3699';
let keyword = 'technology';
const language = 'es';
const apiNyt = 'S3xqa9udfF8ZOljVMq3NYYWvZvLU4zvU';

let url = `https://newsapi.org/v2/everything?q=${keyword}&language=${language}&sortBy=publishedAt&apiKey=${apiKey}`;
let urlJsonPla = 'https://jsonplaceholder.typicode.com/posts'
let nyt_api = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiNyt}`

@Injectable({
  providedIn: 'root'
})

export class NoticiasApiService {

  constructor(private http: HttpClient) {   }

  getData() {    
    return this.http.get(nyt_api);
  }
}

