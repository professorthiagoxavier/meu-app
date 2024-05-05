import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name:string = "Thiago Xavier"
  age:number = 40
  job:string = "Engenheiro líder"
  hobbies = ["futebol", "bike", "músicas"]
  car = {marca: "Ford", modelo:"fiesta"}
  img = '../../assets/img/angular.jpg'  
  isDisabled = true;

}
