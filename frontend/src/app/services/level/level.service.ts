import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, retry } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { Level } from '../../models/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Level> {
    return this.http.get<Level>(`${environment.baseURL}levels/`,)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  createNewLevel(level) {
    return this.http.post(`${environment.baseURL}levels/create`, level);
  }

  getLevelById(id: any): Observable<Level> {
    console.log(id);
    return this.http.get<Level>(`${environment.baseURL}levels/` + id);
  }

  updateLevel(id: any, level: any): Observable<any> {
    console.log(id, level)
    return this.http.put<any>(`${environment.baseURL}levels/edit/` + id, level);
  }

  deleteLevel(id: any) {
    return this.http.delete(`${environment.baseURL}levels/delete/` + id);
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
 