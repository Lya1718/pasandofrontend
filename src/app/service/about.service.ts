import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from '../components/interface';
import { Task } from '../components/interface';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  editingId: any;
  nombre:any;
  apellido:any;
  sobre_mi:any;
  url_perfil:any;
  url_portada:any;
  url_correo:any;
  url_github:any;

  private webApi = "http://localhost:1718/persona";
  private url = 'http://localhost:8080/personas';
  private apiUrl = {
    obtenerPersona: this.url + "/ver",
    crearPersona: this.url + "/new",
    borrarPersona: this.url + "/delete",
    editarPersona: this.url + "/editar"
  }

  constructor(private service: UiService) { }

  // GET
  obtenerPersona(): Observable<any> {
    return this.service.get("http://localhost:1718/persona");
  }

  // DELETE
  borrarPersona(data: any): Observable<any> {
    const url = "http://localhost:1718/persona";
    return this.service.delete(url, data);
  }

  //  // DELETE
  //  borrarPersona(id: any): Observable<any> {
  //   return this.service.delete("http://localhost:1718/persona", id);
  // }

  //EDIT
  editarPersona(id: any, task: Task): Observable<any> {
    return this.service.put("http://localhost:1718/persona", id, task);
  }

  //POST
  crearPersona(task: Task): Observable<any> {
    return this.service.post("http://localhost:1718/persona", task)
  }


}
