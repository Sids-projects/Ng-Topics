import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  message: string = 'Initial Message';

  constructor(private SharedService: SharedService) {}

  ngOnInit() {
    this.SharedService.currentMessage.subscribe((message) => {
      this.message = message;
    });
  }
}
