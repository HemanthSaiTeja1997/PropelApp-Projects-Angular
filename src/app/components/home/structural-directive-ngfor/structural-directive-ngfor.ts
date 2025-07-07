import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngfor',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngfor.html',
  styleUrl: './structural-directive-ngfor.css'
})
export class StructuralDirectiveNgfor {
employees :any[]=[
  {empName:"John",empNumber:101,empEmail:"hemanth@123"},
  {empName:"Wick",empNumber:102,empEmail:"wick@123"},
  {empName:"Sai",empNumber:103,empEmail:"sai@123"},
  {empName:"HemathSai",empNumber:103,empEmail:"sai@123"}


]
company:string[]=["TCS","Wipro","Propel Apps"]
}
