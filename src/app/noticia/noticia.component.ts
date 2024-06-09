import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {
  @Input() titulo: string;
  @Input() body: string;
  @Input() fecha: string;
  @Input() imagen: string;

}
