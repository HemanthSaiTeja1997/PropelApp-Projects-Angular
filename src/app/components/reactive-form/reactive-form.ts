import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  reactiveForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.minLength(10), Validators.email],
      ],
      password: ['',[Validators.required]],
      isChecked: true,
      skills: this.fb.array([]),
      address: this.fb.group({
        city: [''],
        Street: [''],
        pincode: [],
      }),
    });
  }

  //create a get method to get all the skills
  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  newSkills(): FormGroup {
    return this.fb.group({
      skill: '',
    });
  }
  addSkill() {
    this.skills.push(this.newSkills());
  }
  deleteSkill(i: number) {
    this.skills.removeAt(i);
  }

  //using FormGroup and FormControl
  // constructor() {
  //   this.reactiveForm = new FormGroup({
  //     firstName: new FormControl(''),
  //     lastName: new FormControl(''),
  //     email: new FormControl(''),
  //     password: new FormControl(),
  //     isChecked: new FormControl(),
  //     address:new FormGroup({
  //       city:new FormControl(''),
  //       Street:new FormControl(''),
  //       pincode:new FormControl(),

  //     })
  //   });
  // }
  //using FormBuilder where no need to mention formControl for creating variable
  onSubmit() {
    console.log(this.reactiveForm.value);
  }
  setAllValue() {
    this.reactiveForm.setValue({
      firstName: 'Hemanth',
      lastName: 'SaiTeja',
      email: 'Hemanth@gmail.com',
      password: 'Hemanth',
      isChecked: true,
      skills: [''],
      address: {
        city: 'Hyderabad',
        Street: 'ShantiNagar',
        pincode: 500013,
      },
    });
  }
  reset() {
    this.reactiveForm.reset();
  }
  setPatchValue() {
    this.reactiveForm.patchValue({
      address: {
        city: 'Mumbai',
        Street: 'Ghansoli',
        pincode: 401205,
      },
    });
  }
}
