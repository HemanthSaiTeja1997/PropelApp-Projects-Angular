import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  abouthemanth:string='Software Engineer at Propel Apps'
  propertyBindingValue:string="Property-Binding Value"
  image:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Nd2WIztx2FxHJg8zlUnIc3vwBrVG_wNjSA&s"
  onSave(){
    alert("Event Binding is working Fine!!!")
  }
  random:string=""
}
