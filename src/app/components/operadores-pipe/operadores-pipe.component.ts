import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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


 
}
