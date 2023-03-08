import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: String = "http://localhost:1718";
  isLoggedIn: boolean;

  constructor(private http: HttpClient) { }

  //BOOLEAN
  loginLogout(): Observable<any> {
    return of(this.isLoggedIn);
  }

  //LOGIN
  // login(email: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const body = JSON.stringify({ email, password });

  //   return this.http.post('http://localhost:8080/api/login', body, { headers }).pipe(
  //     map(response => {
  //       if (response) {
  //         localStorage.setItem('isLoggedIn', 'true');
  //         return true;
  //       } else {
  //         localStorage.setItem('isLoggedIn', 'false');
  //         return false;
  //       }
  //     })
  //   );
  // }

  login(): Observable<any> {
    localStorage.setItem('isLoggedIn', 'true');
    return of(true);
  }

  //LOGOUT
  // logout(): Observable<any> {
  //   this.isLoggedIn = false;
  //   return of(this.isLoggedIn);
  //   // return this.http.post<any>('https://localhost:8080/api/logout', {});
  //   }

  //LOGOUT
  logout(): Observable<any> {
    localStorage.setItem('isLoggedIn', 'false');
    return of(false);
  }
}
