import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-component',
  imports: [],
  templateUrl: './signal-component.html',
  styleUrl: './signal-component.css'
})
export class SignalComponent {

  counter =signal(0);
    constructor(){
    effect(()=>{console.log("The value of counter is :  "+this.counter);
    })

  }
 
  IncreaseByOne(){
    this.counter.update(v=>v+1);
  }

}
