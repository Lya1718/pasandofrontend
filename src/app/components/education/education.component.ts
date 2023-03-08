import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EducationService } from 'src/app/service/education.service';
import { FormsService } from 'src/app/service/forms.service';
import { Educacion } from '../interface';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  formList: Educacion[];
  login: boolean;

  constructor(private servicio: EducationService) { }

  ngOnInit(): void {
    this.getEducacion()
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  //ID
  editForm(id: any, institucion: any, titulo: any, descripcion: any) {
    this.servicio.editingId = id;
    this.servicio.editingInstitucion = institucion;
    this.servicio.editingTitulo = titulo;
    this.servicio.editingDescripcion = descripcion;
  }

  //GET
  getEducacion() {
    this.servicio.obtenerEducacion().subscribe((data: any) => { this.formList = data; console.log(data); })
  }

  // DELETE
  deleteEducacion(educacion: Educacion) {
    const result = confirm("¿Estás seguro de que quieres eliminar?");
    if (result) {
      console.log("vamos a ver que chucha pasa");
      this.servicio.borrarEducacion(educacion).subscribe(() => (
        this.formList = this.formList.filter( (t) => {
          return t.id !== educacion.id
        })
      )), () => {alert("Se eliminó correctamente.")}
    }
  }
}
