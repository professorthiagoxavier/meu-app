import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Carro } from '../../interfaces/Carro';


@Component({
  selector: 'app-operadores-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './operadores-pipe.component.html',
  styleUrl: './operadores-pipe.component.css'
})
export class OperadoresPipeComponent {
  price:number = 10.25
  text:string = "Thiago Xavier"

  listarCarros: Carro[] = [
    {marca:'Ford', model : 'Ka', imagem: ''}, 
    {marca:'GM', model : 'Corsa', imagem: ''}, 
    {marca:'Fiat', model : 'Uno', imagem: ''}
  ]


 
}
