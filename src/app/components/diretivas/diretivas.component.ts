import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent {
  hasError = false
  size = 50; 
  font = 'Arial'
  color = 'green'
  colorFont = 'red'


  item: any = {
    nome : ''
  }

  setUpperCase(value: string){
    this.item.nome = value.toUpperCase();
  }

  toggleError(){
    this.hasError = !this.hasError;
    console.log(this.hasError)
  }
}
