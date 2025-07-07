import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Interface/iuser';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Crudservice {
  private baseUrl=environment.apiUrl;
  constructor(private http: HttpClient) {}
  //Common method 
  request<T>(method:'GET'|'POST'|'PUT'|'DELETE',path:string='',body?:any) : Observable<T>{
    const url = `${this.baseUrl}${path}`;
    return this.http.request<T>(method,url,{body}).pipe(
      catchError(this.handleError)
    )
  }
// common error
  handleError(error: any) {
    console.error('❌ Global Error Handler:', error);
    alert('Something went wrong! Please try again later.');
    return throwError(() => error);
  }

  // getUserData() : Observable<Iuser[]>{
  //   return this.request<Iuser[]>("GET",this.url)
  // }
  //   postData(user: Iuser): Observable<Iuser> {
  //   return this.request<Iuser>('POST', this.url, user);
  // }
  //   getUserById(id: number): Observable<Iuser> {
  //   return this.request<Iuser>('GET', `${this.url}/${id}`);
  // }
  //   updateUserById(id: number, user: Iuser): Observable<Iuser> {
  //   return this.request<Iuser>('PUT', `${this.url}/${id}`, user);
  // }

  // deleteUserById(id: number): Observable<void> {
  //   return this.request<void>('DELETE', `${this.url}/${id}`);
  // }
  // getUserData() {
  //   return this.http.get<Iuser[]>(this.url);
  // }
  // postData(data: Iuser): Observable<any> {
  //   return this.http.post(this.url, data);
  // }
  // getUserById(id: number) {
  //   return this.http.get<Iuser>(`${this.url}/${id}`);
  // }
  // updataById(id: number, data: Iuser) {
  //   return this.http.put(`${this.url}/${id}`, data);
  // }
  // deleteUserById(id: number) {
  //   return this.http.delete(`${this.url}/${id}`);
  // }
}
