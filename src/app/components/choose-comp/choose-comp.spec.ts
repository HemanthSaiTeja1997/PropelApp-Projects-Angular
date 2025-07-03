import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseComp } from './choose-comp';

describe('ChooseComp', () => {
  let component: ChooseComp;
  let fixture: ComponentFixture<ChooseComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
