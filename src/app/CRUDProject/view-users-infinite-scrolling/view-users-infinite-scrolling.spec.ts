import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersInfiniteScrolling } from './view-users-infinite-scrolling';

describe('ViewUsersInfiniteScrolling', () => {
  let component: ViewUsersInfiniteScrolling;
  let fixture: ComponentFixture<ViewUsersInfiniteScrolling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUsersInfiniteScrolling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUsersInfiniteScrolling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
