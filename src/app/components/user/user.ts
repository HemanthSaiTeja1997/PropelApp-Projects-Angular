import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../../Services/shared-data-service';
import { take } from 'rxjs';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit{
  dummyData:any;
  empDummy:any[];
  apiData:any;
constructor(private router:Router,private _sharedData:SharedDataService){
  this.dummyData=this._sharedData.userData,
  this.empDummy=this._sharedData.employees
}

ngOnInit(): void {
  this.getUserApiData()
}
getUserApiData(){
  this._sharedData.getUserData().pipe(take(1)).subscribe({
    next:(res)=>{this.apiData=res}
  })
}
  name :string='Hemanth';
  Login(){
this.router.navigateByUrl("switch")
  }

}
