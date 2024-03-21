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
    {
      value: 'parentChild',
      optionName: 'Parent Child',
      icon: 'fa-object-group',
    },
    {
      value: 'practice',
      optionName: 'Practice',
      icon: 'fa-object-group',
    },
    {
      value: 'formArray',
      optionName: 'form Array',
      icon: 'fa-object-group',
    },
  ];

  constructor() {}

  ngOnInit() {}

  closeBody() {
    this.showComponents = false;
  }
}
