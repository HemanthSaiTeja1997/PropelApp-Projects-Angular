import { Component } from '@angular/core';
import { Iuser } from '../../Interface/iuser';
import { Crudservice } from '../../Services/crudservice';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchUserPipePipe } from '../../Pipes/search-user-pipe-pipe';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-view-users-infinite-scrolling',
  imports: [FormsModule,CommonModule,SearchUserPipePipe,InfiniteScrollDirective],
  templateUrl: './view-users-infinite-scrolling.html',
  styleUrl: './view-users-infinite-scrolling.css'
})
export class ViewUsersInfiniteScrolling {
  searchTerm: string = '';
  subscription!: Subscription;
  UserData: Iuser[] = [];
  displayedUsers: any[] = []; // Data shown with infinite scroll
page: number = 0;
pageSize: number = 10;
loading: boolean = false;
 

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
        this.displayedUsers = this.UserData.slice(0, this.pageSize);
      this.page++;
        localStorage.setItem('Users', JSON.stringify(this.UserData));
      }
    });
  }
  loadMoreUsers() {
  if (this.loading) return;

  this.loading = true;
  const start = this.page * this.pageSize;
  const end = start + this.pageSize;

  const nextChunk = this.UserData.slice(start, end);
  setTimeout(() => {
    this.displayedUsers = [...this.displayedUsers, ...nextChunk];
    this.page++;
    this.loading = false;
  }, 500);}

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
