import { Component, OnInit } from '@angular/core';
import { Crudservice } from '../../Services/crudservice';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.html',
  styleUrl: './view-user.css',
})
export class ViewUser implements OnInit {
  constructor(
    private crud: Crudservice,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}
  userData: any;
  userId!: {
    uid: number;
  };
  ngOnInit(): void {
    this.userId = {
      uid: this.activeRoute.snapshot.params['id'],
    };
    this.crud
      .getUserById(this.userId.uid)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          this.userData = res;
        },
      });
  }
  onclose() {
    this.route.navigateByUrl('crud');
  }
}
