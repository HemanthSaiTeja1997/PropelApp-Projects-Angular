import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.css',
})
export class StructuralDirective {
  isChecked: boolean = false;
  input1: string = '';
  input2: string = '';

  onClick() {
    this.isChecked = !this.isChecked;
  }
}
