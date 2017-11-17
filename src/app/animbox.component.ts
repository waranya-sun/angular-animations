import { Component, Input } from '@angular/core';
import { trigger, style, state, transition, animate , keyframes, group} from '@angular/animations';

@Component({
  selector: 'app-animbox',
  template: `
    <div class="text-center">{{msgState}}</div>
    <div [@changeState]="currentState" (@changeState.start)="animationStart($event)" (@changeState.done)="animationDone($event)" class="my-box mx-auto"></div>
  `,
  styles: [`
      .my-box {
    /*background-color: #47748f;*/
    width: 200px;
    height : 200px;
    border-radius: 6px;
    margin : 6em;
    }
  `],
  animations: [
    trigger('changeState', [
      state('original', style({
        backgroundColor: '#ffff66',
        transform: 'scale(1)'
      })),
      state('scale', style({
        backgroundColor: '#ffb6c1',
        transform: 'scale(1.5)'
      })),
      state('delaying', style({
        backgroundColor: '#ff8933',
        transform: 'scale(0.3)',
      })),
      state('easing', style({
        backgroundColor: '#33ff5d',
        transform: 'scale(1.7)'
      })),
      state('stepped', style({
        backgroundColor: '#be2ff7',
        opacity: 0.8,
        transform: 'scale(1.2)'
      })),
      state('parallel', style({
        backgroundColor: '#2f92f7',
        transform: 'translateX(150px)',
        borderRadius: '100px'
      })),
      transition('* => original', animate('300ms')),
      transition('* => scale', animate('800ms')),
      transition('* => delaying', animate('800ms 1500ms ease-in')),
      transition('* => easing', animate('1200ms ease-out')),
      transition('* => stepped', [
        animate('3000ms ease-in-out', keyframes([
        style({backgroundColor:'#f72f78' , transform:'scale(1.3)', offset:0.2}),
        style({backgroundColor:'#f7b42f' , transform:'scale(0.2)', offset:0.5}),
        style({backgroundColor:'#be2ff7' , transform:'scale(1.2)', offset:1})
        ]))
      ]),
      transition('* => parallel', [
        group([
          animate('800ms', style({
            backgroundColor: '#2f92f7'
          })),
          animate('1000ms' , style({
            transform: 'translateX(150px)',
            borderRadius: '100px'
          }))
        ])
      ])
    ])
  ]
})
export class AnimboxComponent {
  @Input() currentState;
  msgState = 'rest';
  constructor() { }

  animationStart(e){
    this.msgState = `${e.phaseName} : ${e.fromState} => ${e.toState} [${e.totalTime}]`;
  }

  animationDone(e){
    this.msgState = `${e.phaseName} : ${e.fromState} => ${e.toState} [${e.totalTime}]`;
  }

}
