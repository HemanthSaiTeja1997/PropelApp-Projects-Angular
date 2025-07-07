import { Component, signal } from '@angular/core';
import { SharedDataService } from '../../Services/shared-data-service';


@Component({
  selector: 'app-choose-comp',
  templateUrl: './choose-comp.html',
  styleUrl: './choose-comp.css',
})
export class ChooseComp {
  mainTitle:string;
  constructor(private sharedService:SharedDataService){
    this.mainTitle=this.sharedService.title();
  }
  
}
