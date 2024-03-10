import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {
 eventoRecibido: string=""

  recibirEvento(value: string){
   this.eventoRecibido = value
  }
}
