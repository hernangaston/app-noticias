import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasApiService } from './services/noticias-api.service';
import { NgFor } from '@angular/common';
import { WeatherApiService } from './services/weather-api.service';
import { ClimaComponent } from './clima/clima.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoticiaComponent, NgFor, ClimaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  //VER QUE TIPO  DE DATO VIENE PARA PODER MOSTRAR
  posts: any;
  weather: any;
  constructor(private noticiasApiService: NoticiasApiService, private weatherService: WeatherApiService) { }

  ngOnInit(): void {
    this.noticiasApiService.getData().subscribe(data => {
      const res = JSON.stringify(data);
      this.posts = JSON.parse(res).results;
    });

    this.weatherService.getData().subscribe(data=>{
      this.weather = data;
    })
  }
}

