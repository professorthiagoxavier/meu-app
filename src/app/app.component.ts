import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './componets/first-component/first-component.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { PaiComponent } from './components/pai/pai.component';
import { OperadoresPipeComponent } from './components/operadores-pipe/operadores-pipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, ControlFlowComponent, DiretivasComponent, PaiComponent, OperadoresPipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-app';
}
