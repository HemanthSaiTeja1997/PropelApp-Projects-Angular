import { Component, OnInit } from '@angular/core';
import { Crudservice } from '../../Services/crudservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.html',
  styleUrl: './update-user.css',
})
export class UpdateUser implements OnInit {
  updateUserFrom: FormGroup;
  constructor(
    private crud: Crudservice,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.updateUserFrom = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: [''],
    });
  }
  userData: any;
  userId!: {
    uid: number;
  };
  ngOnInit(): void {
    this.userId = {
      uid: this.activeRoute.snapshot.params['id'],
    };
    console.log(this.userId.uid);
    this.crud
      .getUserById(this.userId.uid)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.userData = res;
          this.updateUserFrom.setValue({
            id: this.userData.id,
            name: this.userData.name,
            username: this.userData.username,
            email: this.userData.email,
          });
        },
        error:(error)=>{
          console.error("Failed to Load the User");
          
        }
      });
  }

  onSubmit() {
    this.crud
      .updateUserById(this.userId.uid, this.updateUserFrom.value)
      .subscribe({
        next: () => {
          this.route.navigateByUrl('crud');
        },
        error: (error) => {
          console.error(error);
          alert('Updation Issue. Please try again later');
        },
      });
  }

  cancel() {
    this.route.navigateByUrl('crud');
  }
}
