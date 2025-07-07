import { Component } from '@angular/core';
import { Iuser } from '../../Interface/iuser';
import { Crudservice } from '../../Services/crudservice';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchUserPipePipe } from '../../Pipes/search-user-pipe-pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scrolling',
  imports: [FormsModule,CommonModule,SearchUserPipePipe,ScrollingModule],
  templateUrl: './virtual-scrolling.html',
  styleUrl: './virtual-scrolling.css'
})
export class VirtualScrolling {
searchTerm: string = '';
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
    this.subscription = this.crud.request<Iuser[]>('GET', '/').subscribe({
      next: (res) => {
        this.UserData = res;
        localStorage.setItem('Users', JSON.stringify(this.UserData));
      }
    });
  }
  ondelete(id: number) {
    this.crud.request<void>('DELETE', `/${id}`).subscribe({
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
