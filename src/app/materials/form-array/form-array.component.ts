import { Component } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent {
  hobbyForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.hobbyForm = this.formBuilder.group({
      hobby: this.formBuilder.array([]),
    });
  }

  get hobbyControl() {
    return (this.hobbyForm.get('hobby') as FormArray).controls;
  }

  createHobby() {
    let create = this.formBuilder.group({
      name: [''],
      desc: [''],
    });

    (this.hobbyForm.get('hobby') as FormArray).push(create);
  }
}
