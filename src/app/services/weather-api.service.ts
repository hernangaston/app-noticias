import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const keyWeather = '867014d98631456eb4b91249241305'
const locationCity = 'Venado';
const limitDays = '5';
const language = 'es';

const urlWeather = `https://api.weatherapi.com/v1/current.json?q=${locationCity}&lang=${language}&days=${limitDays}&key=${keyWeather}`

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  constructor(private http: HttpClient) {   }

  getData() {    
    return this.http.get(urlWeather);
  }

}
