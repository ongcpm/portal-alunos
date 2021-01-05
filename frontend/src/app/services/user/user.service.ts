import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, retry } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {}

  createNewUser(payload) {
    return this.http.post(`${environment.baseURL}user/register`, payload);
  }

  userLogin(payload) {
    console.log(payload);
    return this.http.post(`${environment.baseURL}user/login`, payload);
  }

  getAll(): Observable<any> {
    return this.http.get<any>(`${environment.baseURL}user/users/`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getUserById(id: any): Observable<User> {
    console.log(id);
    return this.http.get<User>(`${environment.baseURL}user/` + id);
  }

  updateUser(id: any, user: User): Observable<User> {
    return this.http.put<User>(`${environment.baseURL}user/edit/` + id, user);
  }

  deleteUser(id: any) {
    return this.http.delete(`${environment.baseURL}user/delete/` + id);
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}

