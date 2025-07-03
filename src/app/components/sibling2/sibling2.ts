import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  imports: [],
  templateUrl: './sibling2.html',
  styleUrl: './sibling2.css'
})
export class Sibling2 {
@Input() sibling1Property:string=""
@Output() sibling2Event=new EventEmitter<any>();
onsend(data:any){
  this.sibling2Event.emit(data)
}
}
