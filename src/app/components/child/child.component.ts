import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  newMessage: string = '';

  constructor(private SharedService: SharedService) {}

  sendMessage() {
    this.SharedService.changeMessage(this.newMessage);
  }
}
