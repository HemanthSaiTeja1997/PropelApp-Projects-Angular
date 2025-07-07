import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-switch-vs-switch-component',
  imports: [CommonModule],
  templateUrl: './structural-directive-ng-switch-vs-switch-component.html',
  styleUrl: './structural-directive-ng-switch-vs-switch-component.css'
})
export class StructuralDirectiveNgSwitchVsSwitchComponent {
  grade:number=0;
  set(X:number){
    this.grade=X
  }

}
