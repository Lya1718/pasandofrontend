import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {
  myForm: FormGroup;
  id = this.servicio.editingId;
  habilidad = this.servicio.editingHabilidad;
  nivel = this.servicio.editingNivel;

  constructor(private servicio: SkillsService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        id: new FormControl(this.id, [Validators.required]),
        hability: new FormControl(this.habilidad, [Validators.required]),
        nivel: new FormControl(this.nivel, [Validators.required, Validators.maxLength(3)])
      }
    )
  }

  get formCtrl() {
    return this.myForm.controls;
  }

  //PUT
  editSkill() {
    if (this.myForm.invalid) {
      return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
    } else {
      console.log(this.myForm.controls['id'].value);
      this.servicio.editarHabilidad(this.myForm.controls['id'].value, this.myForm.value).subscribe(() => { alert('Se guardó correctamente') });
    }
  }
  //CONEXION HTML
  get Id() {
    return this.myForm.get('id');
  }
  get Hability() {
    return this.myForm.get('hability');
  }
  get Nivel() {
    return this.myForm.get('nivel');
  }

}
