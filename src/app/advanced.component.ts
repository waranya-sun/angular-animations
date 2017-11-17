import { Component } from '@angular/core';
import { trigger, transition, style, query, animate, stagger} from '@angular/animations';

@Component({
  selector: 'app-advanced',
  template: `
    <h1>Advanced Concepts</h1>
    <div class="container-fluid">
        <div class="row align-items-center">
           <div class="col-12">
               <div [@lettersAnimation]="letters.length">
                    <ul *ngFor = "let letter of letters">
                    <li class="letter-block d-flex justify-content-center">{{letter.value}}</li>
                    </ul>
               </div>
              <app-fadeblock></app-fadeblock>
           </div>
        </div>
        <div class="row">
          <div class="col-12">
            <hr>
            <button class="btn btn-outline-primary" (click)="showLetters()">Show the Letters</button>
          </div>
        </div>
    </div>
  `,
  styles: [`
    .letter-block {
    float:left;
    width:15%;
    height:80px;
    background-color: #ffe4c4;
    color: #000000;
    margin: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    display: block;
    }
`],
  animations: [
    trigger('lettersAnimation', [
      transition('* => *', [
        query(':enter', style({opacity:'0'}), {optional:true}),
        query(':enter', stagger('100ms', [ animate('1s', style({opacity:'1'}))]), {optional: true})
      ])
    ] )
  ]
})
export class AdvancedComponent {

  constructor() {
  }

  letters = [];

  showLetters() {
    this.letters = [
      {id: 1, value: 'A'},
      {id: 2, value: 'B'},
      {id: 3, value: 'C'},
      {id: 4, value: 'D'},
      {id: 5, value: 'E'},
      {id: 6, value: 'F'},
      {id: 7, value: 'G'},
      {id: 8, value: 'H'},
      {id: 9, value: 'I'},
      {id: 10, value: 'J'},
      {id: 11, value: 'K'},
      {id: 12, value: 'L'},
      {id: 13, value: 'M'},
      {id: 14, value: 'N'},
      {id: 15, value: 'O'},
      {id: 16, value: 'P'},
      {id: 17, value: 'Q'},
      {id: 18, value: 'R'},
      {id: 19, value: 'S'},
      {id: 20, value: 'T'},
      {id: 21, value: 'U'},
      {id: 22, value: 'V'},
      {id: 23, value: 'W'},
      {id: 24, value: 'X'},
      {id: 25, value: 'Y'},
      {id: 26, value: 'Z'}
    ];
  }
}
