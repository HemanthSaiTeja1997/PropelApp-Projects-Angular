import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustompipePipe } from '../../Pipes/custompipe-pipe';
import { PurepipePipe } from '../../Pipes/purepipe-pipe';
import { ImpurepipePipe } from '../../Pipes/impurepipe-pipe';


@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule,CustompipePipe,PurepipePipe,ImpurepipePipe],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.css'
})
export class BuiltInPipes {
  sampleText:string="this is built-in pipe";
  mobileNumber=9848116547;
  currentDate:Date=new Date();
  personData={
    name:"Hemanth",
    age:25,
    city:"Telanga"
  }
items=of(["apple","Banana","custadApple","DragonFruit"])
}
