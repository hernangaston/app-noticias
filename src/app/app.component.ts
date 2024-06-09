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
  posts: any;
  weather: any;
  constructor(private apiService: NoticiasApiService, private weatherService: WeatherApiService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });

    this.weatherService.getData().subscribe(data=>{
      this.weather = data;
      console.log(this.weather);
    })
  }
  
  title = "test app";  
  
}

