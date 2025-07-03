import { Component } from '@angular/core';
import { Child } from "../child/child";
import { Sibling1 } from "../sibling1/sibling1";
import { Sibling2 } from "../sibling2/sibling2";

@Component({
  selector: 'app-parent',
  imports: [Child, Sibling1, Sibling2],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
parentInputProperty:string="This is Parent Input Property calling in child using @Input()";
receiveMessage:any="";
sibling1Data:any;
sibling2Data:any;

receiveData(data:any){
this.receiveMessage=data
}
receiveEvent1(data:any){
this.sibling1Data=data;
}
receiveEvent2(data:any){
this.sibling2Data=data;
}
}
