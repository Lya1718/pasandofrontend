import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  editingId: any;
  editingHabilidad: any;
  editingNivel: any;

  private url = 'http://localhost:8080/habilidades';
  private apiUrl = {
    obtenerHabilidad: this.url + "/ver",
    crearHabilidad: this.url + "/new",
    borrarHabilidad: this.url + "/delete",
    editarHabilidad: this.url + "/editar"
  }

  constructor(private service: UiService) {

  }

   //ID
   obtenerId(): Observable<any> {
    return of(this.editingId); 
   }

  // GET
  obtenerHabilidad(): Observable<any> {
    const url = "http://localhost:1718/habilidad";
    return this.service.get(url);
  }

  // DELETE
  borrarHabilidad(data: any): Observable<any> {
    const url = "http://localhost:1718/habilidad";
    return this.service.delete(url, data);
  }

  //EDIT
  editarHabilidad(id: any, task: Task): Observable<any> {
    return this.service.put("http://localhost:1718/habilidad", id, task);
  }

  //POST
  crearHabilidad(task: Task): Observable<any> {
    return this.service.post("http://localhost:1718/habilidad", task)
  }

}
