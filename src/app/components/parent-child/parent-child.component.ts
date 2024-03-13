import { Component } from '@angular/core';
// Import Prism core
import * as Prism from 'prismjs';

// Import specific languages to reduce bundle size
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';

// Import plugins
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/show-language/prism-show-language';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss'],
})
export class ParentChildComponent {
  explanationIf: boolean = false;
  codeIf: boolean = false;
  setTitle: string = '';

  explanation: any = [
    {
      collapseKey: 'collapseOne',
      icon: 'fa-share-from-square',
      title: 'Sharing Data Between Components',
      desc: "Shared services are often used to share data between components that are not directly related or don't have a parent-child relationship. This is useful when you want to share information between components at different levels in the component tree.",
    },
    {
      collapseKey: 'collapseTwo',
      icon: 'fa-diagram-project',
      title: 'Maintaining Application State',
      desc: 'Shared services can be used to maintain the state of the application. Components can subscribe to the service to get updates about changes in the application state.',
    },
    {
      collapseKey: 'collapseThree',
      icon: 'fa-rotate-left',
      title: 'Encapsulating Business Logic',
      desc: 'If there is common business logic or functionality that multiple components need to access, it can be encapsulated in a shared service. This promotes code reusability and maintainability.',
    },
  ];

  steps: any = [
    {
      count: 'Step 1',
      title: 'Creating a Shared Service:',
      content: 'Create a simple shared service called DataService',
      codeBlockName: 'serviceStep1',
    },
    {
      count: 'Step 2',
      title: 'Component Two:',
      content: 'Use this shared service in two components.',
      codeBlockName: 'serviceStep2',
    },
    {
      count: 'Step 3',
      title: 'Component One:',
      content: 'Use this shared service in two components.',
      codeBlockName: 'serviceStep3',
    },
    {
      count: 'Step 4',
      title: 'Injecting the Shared Service:',
      content:
        'Ensure that you provide the DataService in your app.module.ts or any module where you want to use it',
      codeBlockName: 'serviceStep4',
    },
  ];

  ngAfterViewInit() {
    Prism.highlightAll();
  }

  explanationFn() {
    this.explanationIf = true;
    this.codeIf = false;
    this.setTitle = 'Explanation';
  }

  codeFn() {
    this.explanationIf = false;
    this.codeIf = true;
    this.setTitle = 'Code';
  }
}
