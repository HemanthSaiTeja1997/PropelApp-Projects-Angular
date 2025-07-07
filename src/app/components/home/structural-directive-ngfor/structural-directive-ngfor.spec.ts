import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgfor } from './structural-directive-ngfor';

describe('StructuralDirectiveNgfor', () => {
  let component: StructuralDirectiveNgfor;
  let fixture: ComponentFixture<StructuralDirectiveNgfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgfor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgfor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
