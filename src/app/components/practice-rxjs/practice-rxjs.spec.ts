import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeRxjs } from './practice-rxjs';

describe('PracticeRxjs', () => {
  let component: PracticeRxjs;
  let fixture: ComponentFixture<PracticeRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeRxjs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeRxjs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
