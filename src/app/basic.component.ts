import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  template: `
    <h1>Animation Basics</h1>
      <div class="container-fluid">
        <div class="row">
           <div class="col-5">
            <div class = "btn-group-vertical btn-block" role="group" style="margin-top:5em;">
              <button type="button" (click)="setState('original')" class="btn btn-outline-dark">Return to original</button>
              <button type="button" (click)="setState('scale')" class="btn btn-outline-dark">Animation with scale</button>
              <button type="button" (click)="setState('delaying')" class="btn btn-outline-dark">Animation with delay</button>
              <button type="button" (click)="setState('easing')" class="btn btn-outline-dark">Animation with ease-in-out</button>
              <button type="button" (click)="setState('stepped')" class="btn btn-outline-dark">Animation with keyframes</button>
              <button type="button" (click)="setState('parallel')" class="btn btn-outline-dark">Parallel Animation</button>
            </div>
           </div>
           <div class="col-7">
           <app-animbox [currentState] = switchState></app-animbox>
           <div class="text-center">{{detail}}</div>
           </div>
        </div>
      </div>
  `,
  styles: [`   
   .btn:active {
   outline: red;
}
}
`]
})
export class BasicComponent {
  constructor() {}

  detail = 'Width : 200px, Height : 200px';
  switchState = 'original';
  setState(state){
    this.switchState = state;
    switch(state){
      case 'original':
        this.detail = 'Width : 200px, Height: 200px';
        break;
      case 'scale':
        this.detail = 'transform: scale(1.5)';
        break;
      case 'delaying':
        this.detail = "animate(' 800ms 1500ms ease-in')";
        break;
      case 'easing':
        this.detail = "animate(' 1200ms ease-out ')";
        break;
      case 'stepped':
        this.detail = "animate(' 3000ms ease-in-out ', keyframes( [....] ))";
        break;
      case 'parallel':
        this.detail = "group( [ animate(...), animate(...)] )";
        break;
    }
    console.log(state);
  }

}
