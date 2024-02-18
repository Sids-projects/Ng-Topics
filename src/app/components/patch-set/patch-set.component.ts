import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patch-set',
  templateUrl: './patch-set.component.html',
  styleUrls: ['./patch-set.component.scss'],
})
export class PatchSetComponent {
  setPatchData: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    age: [null, Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  setValueExample() {
    this.myForm.setValue({
      name: this.setPatchData.name,
      age: this.setPatchData.age,
      email: this.setPatchData.email,
    });
  }

  patchValueExample() {
    this.myForm.patchValue({
      name: 'Peter',
    });
  }
}
