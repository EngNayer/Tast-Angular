import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  // apiURL = 'https://conduit.productionready.io/api/';

  constructor(private http: HttpClient) { }

  // Error handling 
  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  // HttpClient API get() method => Fetch employees list
  // getData(nameApi:any): Observable<any> {
  //   return this.http.get<any>(this.apiURL + nameApi)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  getData(url:any): Observable<any> {
    return this.http.get<any>(url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

}
