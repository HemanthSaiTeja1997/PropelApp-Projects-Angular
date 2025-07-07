import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrolling } from './virtual-scrolling';

describe('VirtualScrolling', () => {
  let component: VirtualScrolling;
  let fixture: ComponentFixture<VirtualScrolling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualScrolling]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualScrolling);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
