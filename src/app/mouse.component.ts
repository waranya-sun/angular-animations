import { Component } from '@angular/core';
import { trigger , animate, state, style, transition} from '@angular/animations';

@Component({
  selector: 'app-mouse',
  template: `
    <div class="mymouse mx-auto" [@changeState]="currentState" (mouseenter)="setMouse('hover')" (mouseleave)="setMouse('rest')" (mousedown)="setMouse('press')"></div>
  `,
  styles: [`
     .mymouse {
    background-color: #e9967a;
    width: 200px;
    height: 200px;
    border-radius: 200px;
    margin: 6em;
    } 
  `],

  animations : [
    trigger('changeState', [
      state('hover', style({
        transform: 'scale(1.2)'
      })),
      state('press' , style({
        backgroundColor: '#f72f5c',
        transform: 'scale(1.2)'
      })),
      state('rest', style({
        transform: 'scale(1)'
      })),
      transition('rest => hover', animate('500ms ease-in')),
      transition('hover => rest', animate('250ms ease-out')),
      transition('hover => press', animate('300ms')),
      transition('press => rest', animate('200ms'))
    ])
  ]
})
export class MouseComponent {

  currentState = 'rest';
  constructor() { }

  setMouse(state){
    this.currentState = state;
  }

}
