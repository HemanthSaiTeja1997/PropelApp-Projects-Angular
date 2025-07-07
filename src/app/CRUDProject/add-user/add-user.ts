import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Crudservice } from '../../Services/crudservice';
import { Iuser } from '../../Interface/iuser';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  addUserForm: FormGroup;
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private crud: Crudservice
  ) {
    this.addUserForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
    });
  }
  onSubmit() {
    // console.log(this.addUserForm.value);
    this.crud.request<Iuser>('POST', '/', this.addUserForm.value).subscribe({
      next: () => {
        this.route.navigateByUrl('crud');
      }
    });
  }

  cancel(): void {
    this.route.navigateByUrl('crud');
  }
}
