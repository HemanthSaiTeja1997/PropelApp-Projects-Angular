import { Component, OnDestroy, OnInit } from '@angular/core';
import { Crudservice } from '../../Services/crudservice';
import { Iuser } from '../../Interface/iuser';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crud',
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class CRUD implements OnInit, OnDestroy {
  subscription!: Subscription;
  UserData: Iuser[] = [];
  page: number = 1;
  constructor(private crud: Crudservice, private route: Router) {}

  ngOnInit(): void {
    this.getAllUserData();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  getAllUserData() {
    this.subscription = this.crud.getUserData().subscribe({
      next: (res) => {
        this.UserData = res;
        localStorage.setItem('Users', JSON.stringify(this.UserData));
      },
      error: (error) => {
        console.error('Error Fetching Data', error);
        alert('Failed to Fetch user Data... Please try again later.');
      },
    });
  }
  ondelete(id: number) {
    this.crud.deleteUserById(id).subscribe({
      next: () => {
        this.getAllUserData();
      },
      error: (error) => {
        console.error('Error deleting user:', error);
        alert('Failed to delete user. Please try again later.');
      },
    });
  }
  addNewUser() {
    this.route.navigateByUrl('adduser');
  }
  updateUser(id: number) {
    this.route.navigate(['updateuser', id]);
  }
  onview(id: number) {
    this.route.navigate(['viewuser', id]);
  }
}
