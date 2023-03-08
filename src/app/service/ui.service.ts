import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../components/interface';

@Injectable({
  providedIn: 'root'
})

export class UiService {
  private webApi = "http://localhost:1718/persona";

  constructor(private http: HttpClient,) { }

  //GET
  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  //POST
  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data)
  }

  //PUT
  put(url: string, id: any, data: any) {
    return this.http.put(`${url}/${id}`, data);
  }

  //DELETE
  delete(url: string, data: any): Observable<any> {
    // const url = `${this.webApi}/${persona.id}`;
    return this.http.delete<Persona>(`${url}/${data.id}`, data);
  }

  // //DELETE
  // delete(persona:Persona): Observable<Persona> {
  //   const url = `${this.webApi}/${persona.id}`;
  //   return this.http.delete<Persona>(url);
  // }
}

//npm install json-server
//npm run server