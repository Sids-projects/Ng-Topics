import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  showDesc: boolean = true;
  showWorkings: boolean = false;

  // Template-Driven Forms:
  tdFormEx: string = '';

  // Reactive Form: General
  reactiveFormsEx: FormGroup = new FormGroup({
    reactiveControl1: new FormControl(),
    reactiveControl2: new FormControl('', Validators.required),
    reactiveControl3: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    reactiveControl4: new FormControl('', Validators.pattern('[a-zA-Z ]*')),
    reactiveControl5: new FormControl('', Validators.email),
  });

  // Reactive Form: Form Builder
  reactiveFormBuilder: FormGroup = this.formBuilder.group({
    generalExample: '',
    nestedFormGroup: this.formBuilder.group({
      nestedControl1: ['', Validators.required],
      nestedControl2: ['', Validators.required],
    }),
  });

  // Reactive Forms: Form Array
  reactiveFormArray: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveFormArray = this.formBuilder.group({
      skills: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {}

  get skills(): FormArray {
    return this.reactiveFormArray.get('skills') as FormArray;
  }

  // Add a new skill group to the FormArray
  addSkill() {
    const skillGroup = this.formBuilder.group({
      name: ['', Validators.required],
      proficiency: ['', Validators.required],
    });

    this.skills.push(skillGroup);
  }

  onSubmitFormArray() {
    console.log(this.reactiveFormArray.value);
  }

  onSubmit() {
    console.log('Form submitted:', this.reactiveFormBuilder.value);
  }

  templateForm() {
    console.log(this.tdFormEx);
  }

  showExplainBtn() {
    this.showDesc = true;
    this.showWorkings = false;
  }

  showDescBtn() {
    this.showDesc = false;
    this.showWorkings = true;
  }
}
