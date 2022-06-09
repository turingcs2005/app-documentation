import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { AppDocument } from 'src/app/app-data/app-models';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:5003/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getAppDocuments(): Observable<AppDocument[]> {
    return this.http.get<AppDocument[]>(`${apiUrl}/allDocuments`)
      .pipe(
        tap(data => console.log('fetched app documents')),
        catchError(this.handleError('getAppDocuments', []))
      );
  }

  // 🔥 need to define additional methods
  // getAppDocumentByID() {}
  // addAppDocument() {}
  // updateAppDocument() {}
  // deleteAppDocumentByID() {}

}
