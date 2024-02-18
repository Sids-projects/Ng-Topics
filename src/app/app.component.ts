import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-topics';
  showHome: boolean = true;
  showComponents: boolean = false;

  exForm: FormGroup = new FormGroup({
    topicControl: new FormControl(''),
  });

  topics = [
    { value: 'ngFor', viewValue: 'ngFor' },
    { value: 'forms', viewValue: 'Forms' },
    { value: 'tableFilter', viewValue: 'Table Filter' },
    { value: 'patchSet', viewValue: 'Patch Set' },
    { value: 'materials', viewValue: 'Materials' },
    { value: 'iframe', viewValue: 'iframe' },
  ];

  constructor() {}

  ngOnInit() {}

  closeBody() {
    this.showComponents = false;
  }
}
