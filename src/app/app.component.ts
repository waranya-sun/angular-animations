import {Component, ViewEncapsulation} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {slideAnimation} from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations:[
    trigger('routerAnimations', [
      transition('* => *', slideAnimation)] )
  ]
})
export class AppComponent {

  prepareRouteTransition(outlet){
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }


}
