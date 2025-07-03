import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Interface/iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Crudservice {
  url: string = 'http://localhost:3000/Users';
  constructor(private http: HttpClient) {}
  //Common method 
  request<T>(method:'GET'|'POST'|'PUT'|'DELETE',url:string,body?:any) : Observable<T>{
    return this.http.request<T>(method,url,{body})
  }

  getUserData() : Observable<Iuser[]>{
    return this.request<Iuser[]>("GET",this.url)
  }
    postData(user: Iuser): Observable<Iuser> {
    return this.request<Iuser>('POST', this.url, user);
  }
    getUserById(id: number): Observable<Iuser> {
    return this.request<Iuser>('GET', `${this.url}/${id}`);
  }
    updateUserById(id: number, user: Iuser): Observable<Iuser> {
    return this.request<Iuser>('PUT', `${this.url}/${id}`, user);
  }

  deleteUserById(id: number): Observable<void> {
    return this.request<void>('DELETE', `${this.url}/${id}`);
  }
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
