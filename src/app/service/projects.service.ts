import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  editingId: any;
  editingTitulo: any;
  editingDescripcion: any;
  editingImage: any;

  private url = 'http://localhost:8080/proyectos';
  private apiUrl = {
    obtenerProyecto: this.url + "/ver",
    crearProyecto: this.url + "/new",
    borrarProyecto: this.url + "/delete",
    editarProyecto: this.url + "/editar"
  }

  constructor(private service:UiService) { }

  // GET
  obtenerProyecto():Observable<any>{
    const url = "http://localhost:1718/project";
    return this.service.get(url);  
  }

  // DELETE
  borrarProyecto(data: any): Observable<any> {
    const url = "http://localhost:1718/project";
    return this.service.delete(url, data);
  }

  //EDIT
  editarProyecto(id: any, task: Task): Observable<any> {
    return this.service.put("http://localhost:1718/project", id, task);
  }

  //POST
  crearProyecto(task:Task):Observable<any>{
    return this.service.post("http://localhost:1718/project", task)
  }

}
