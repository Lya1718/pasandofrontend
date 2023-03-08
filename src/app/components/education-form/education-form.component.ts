import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {
  myForm: FormGroup;
  id = this.servicio.editingId;
  titulo = this.servicio.editingTitulo;
  institucion = this.servicio.editingInstitucion;
  descripcion = this.servicio.editingDescripcion;

  constructor(private servicio: EducationService) { }

  ngOnInit(): void {
    // this.servicio.obtenerId().subscribe((data:any) => {
    // this.id = data;});
    console.log(this.id),
    console.log(this.institucion),
    console.log(this.titulo),
    console.log(this.descripcion),
    this.myForm = new FormGroup(
      {
        id: new FormControl(this.id, [Validators.required]),
        institucion: new FormControl(this.institucion, [Validators.required]),
        titulo: new FormControl(this.titulo, [Validators.required]),
        descripcion: new FormControl(this.descripcion, [Validators.required])
      }
    )
  }

  get formCtrl() {
    return this.myForm.controls;
  }

  //PUT
  editEducacion() {
    if (this.myForm.invalid) {
      return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
    } else {
    console.log(this.myForm.controls['id'].value);
    this.servicio.editarEducacion(this.myForm.controls['id'].value, this.myForm.value).subscribe(() => { alert('Se guardó correctamente') });
    }
  }

  // //POST - PUT
  // saveEducacion() {
  //   // this.isSubmitted = true;
  //   if (this.myForm.invalid) {
  //     return;
  //   } else {
  //     if () {
  //       this.servicio.crearEducacion(this.myForm.value).subscribe(() => {
  //         alert('Se creó correctamente');
  //       });
  //     } else {
  //       this.servicio.editarEducacion(this.myForm.controls['id'].value, this.myForm.value).subscribe(() => {
  //         alert('Se guardó correctamente');
  //       })
  //     }
  //   }
  // }

  //CONEXION HTML
  // get Id() {
  //   return this.myForm.get('id');
  // }
  get Institucion() {
    return this.myForm.get('institucion');
  }
  get Titulo() {
    return this.myForm.get('titulo');
  }
  get Descripcion() {
    return this.myForm.get('descripcion');
  }

}
