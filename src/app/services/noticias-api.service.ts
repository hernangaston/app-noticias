import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = 'ffc6693f2c1a4dccadbbb259a54dd21b';
let keyword = 'technology';
const language = 'es';

let url = `https://newsapi.org/v2/everything?q=${keyword}&language=${language}&sortBy=publishedAt&apiKey=${apiKey}`;
let urlJsonPla = 'https://jsonplaceholder.typicode.com/posts'

@Injectable({
  providedIn: 'root'
})

export class NoticiasApiService {

  constructor(private http: HttpClient) {   }

  getData() {    
    return this.http.get(urlJsonPla);
  }
}

