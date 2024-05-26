import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: true,
  imports: [],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent {
 @Output() eventoFilho : EventEmitter<any> =new EventEmitter();


  alterarPai() : void{
    console.log("Alterar pai")
    const nome = "Thiago Xavier"
    this.eventoFilho.emit(nome)
  }


}
