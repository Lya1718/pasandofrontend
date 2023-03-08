import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsService } from 'src/app/service/forms.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent {
  mostrarEditar: boolean = false;
  suscripcion?: Subscription;
  @Output() mostrarFormulario: EventEmitter<Task> = new EventEmitter();

  constructor(private service: FormsService) { }

  ngOnInit() {
    // this.suscripcion = this.service.edicion().subscribe(value => this.mostrarEditar = value)
  }

  btnClick(){
    this.mostrarFormulario.emit;
    // this.service.edicionTodo();
  }

  //ON/OFF
  // editarOn() {
  //   this.service.edicionTodo();
  // }

}
