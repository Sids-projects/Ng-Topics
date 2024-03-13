import { Component, Input } from '@angular/core';
// Import Prism core
import * as Prism from 'prismjs';

// Import specific languages to reduce bundle size
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';

// Import plugins
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/show-language/prism-show-language';

@Component({
  selector: 'app-code-blocks',
  templateUrl: './code-blocks.component.html',
  styleUrls: ['./code-blocks.component.scss'],
})
export class CodeBlocksComponent {
  @Input() serviceSteps: string = '';

  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
