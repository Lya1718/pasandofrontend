import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AboutComponent } from '../components/about/about.component';
import { EducationComponent } from '../components/education/education.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { SkillsComponent } from '../components/skills/skills.component';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  formToggleEvent = new Subject<boolean>();
  showForm: boolean = false;

  constructor() { }

  //ABOUT

  toggleForm() {
    this.showForm = !this.showForm;
    this.formToggleEvent.next(this.showForm);
    // this.education.formToggleEvent.next(this.showForm);
    // this.skills.formToggleEvent.next(this.showForm);
    // this.projects.formToggleEvent.next(this.showForm);
  }

  // edicion(): Observable<any> {
  //   console.log("funciona segunda funcion");
  //   return this.sujeto.asObservable();
  // }

}
