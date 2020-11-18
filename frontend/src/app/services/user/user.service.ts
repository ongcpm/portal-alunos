import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map, retry } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
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
    return this.http.get<any>(`${environment.baseURL}user/users/`,)
      .pipe(
        retry(2),
        catchError(this.handleError))
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

