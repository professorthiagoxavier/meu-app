import { Component } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  standalone: true,
  imports: [FilhoComponent],
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css'
})
export class PaiComponent {


  chamandoPai(nome: string): void{
    console.log(nome)
    alert('Filho chamando pai')
  }

}
