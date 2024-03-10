import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  @Output() evento: EventEmitter<string>= new EventEmitter<string>

  lanzarEvento(){
    this.evento.emit("Soy el hijo comunicandome con el padre")
  }
}
