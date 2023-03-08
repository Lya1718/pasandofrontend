import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  editingId: any;
  editingInstitucion: any;
  editingTitulo: any;
  editingDescripcion: any;

  private url = 'http://localhost:8080/educacion';
  private apiUrl = {
    obtenerEducacion: this.url + "/ver",
    crearEducacion: this.url + "/new",
    borrarEducacion: this.url + "/delete",
    editarEducacion: this.url + "/editar"
  }

  constructor(private service: UiService) { }

  //ID
  obtenerId(): Observable<any> {
   return of(this.editingId); 
  }

  //TITULO
  obtenerT(): Observable<any> {
    return of(this.editingTitulo); 
   }

   //INSTITUCION
  obtenerI(): Observable<any> {
    return of(this.editingInstitucion); 
   }

   //DESCRIPCION
  obtenerD(): Observable<any> {
    return of(this.editingDescripcion); 
   }

  // GET
  obtenerEducacion(): Observable<any> {
    const url = "http://localhost:1718/educacion";
    return this.service.get(url);
  }

  // DELETE
  borrarEducacion(data: any): Observable<any> {
    const url = "http://localhost:1718/educacion";
    return this.service.delete(url, data);
  }

  //  // DELETE
  //  borrarEducacion(id: any): Observable<any> {
  //   return this.service.delete("http://localhost:1718/educacion", id);
  // }

  //EDIT
  editarEducacion(id: any, task: Task): Observable<any> {
    return this.service.put("http://localhost:1718/educacion", id, task);
  }

  //POST
  crearEducacion(task: Task): Observable<any> {
    return this.service.post("http://localhost:1718/educacion", task)
  }
}
