import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [],
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css'
})
export class ClimaComponent {
 @Input() localidad: string;
 @Input() temperatura: number;
 @Input() condicionIcon: string;
 @Input() atributos: string;
 @Input() viento: number;
 @Input() texto:string;
}
