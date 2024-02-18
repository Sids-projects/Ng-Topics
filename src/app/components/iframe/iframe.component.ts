import { Component } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent {
  SummaryData = [
    {
      id: 1,
      name: 'Peter',
      phoneNumber: '9098877645',
      status: 'pending',
      icon: 'call',
    },
    {
      id: 2,
      name: 'Alex',
      phoneNumber: '8098877645',
      status: 'pending',
      icon: 'call',
    },
    {
      id: 3,
      name: 'Ronen',
      phoneNumber: '7098877645',
      status: 'pending',
      icon: 'call',
    },
    {
      id: 4,
      name: 'Harry',
      phoneNumber: '6098877645',
      status: 'pending',
      icon: 'call',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('message', this.receiveMessage2.bind(this), false);
  }

  ngOnDestroy(): void {
    window.removeEventListener(
      'message',
      this.receiveMessage2.bind(this),
      false
    );
  }

  sendMessageToIframe(data: {}) {
    const iframe = document.getElementById('myIframe') as HTMLIFrameElement;
    const message = data;
    iframe.contentWindow?.postMessage(message, 'http://localhost:4202');
  }

  receiveMessage2(event: MessageEvent) {
    if (event.origin === 'http://localhost:4202') {
      console.log('from parent', event.data);

      for (let i = 0; i < this.SummaryData.length; i++) {
        if (this.SummaryData[i].id === event.data.id) {
          this.SummaryData[i].id = event.data.id;
          this.SummaryData[i].name = event.data.name;
          this.SummaryData[i].phoneNumber = event.data.phoneNumber;
          this.SummaryData[i].status = event.data.status;
          this.SummaryData[i].icon = event.data.icon;
        }
      }
    }
  }
}
