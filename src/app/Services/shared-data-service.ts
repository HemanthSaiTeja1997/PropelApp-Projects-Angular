import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  API_URL="https://jsonplaceholder.typicode.com/users";

  constructor( private _http:HttpClient) { }
  getUserData(){
   return this._http.get(this.API_URL);
  }
  userData:any={
    name:"Hemanth",
    age:25,
    email:"Hemanth@123"
  }
  employees :any[]=[
  {empName:"John",empNumber:101,empEmail:"hemanth@123"},
  {empName:"Wick",empNumber:102,empEmail:"wick@123"},
  {empName:"Sai",empNumber:103,empEmail:"sai@123"}

]
}
