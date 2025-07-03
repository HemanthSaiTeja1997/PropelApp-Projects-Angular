import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css'
})
export class AttributeDirective {
  textColor:string='red';
  onChange(c:string){
    this.textColor=c;
  }
  stylecolor:string='orange'
  onupdate(u:string){
this.stylecolor=u
  }

}
