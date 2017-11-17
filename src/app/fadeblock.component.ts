import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeAnimation } from './animations';


@Component({
  selector: 'app-fadeblock',
  template: `
    <div class="fadeBlock mx-auto" [@changeState]="currentState"></div>
  `,
  styles: [`
    .fadeBlock {
      background-color: #a9a9a9;
      width : 500px;
      height: 250px;
      border-radius: 5px;
      margin: 6.5rem;
      opacity : 0;
    }
`],
  animations: [
    trigger('changeState', [
      transition('void => *', [
        useAnimation(fadeAnimation)
      ])
    ])
  ]
})
export class FadeblockComponent {}
