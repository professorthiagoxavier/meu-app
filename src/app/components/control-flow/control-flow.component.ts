import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  mostrar: boolean = true
  color: string = "red"
  esportes = ["futebol", "basquete", "volei"]
  carros = []
  selectedValue: string = 'one';

  mes = 3;

  changeValue(event: Event) {
    const selectElement = event.target as HTMLSelectElement

    this.selectedValue = selectElement.value;
  }

  constructor() {

  }

}
