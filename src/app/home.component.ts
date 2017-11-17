import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 intro">
          <h1>Project Home</h1>
          <p>This is the project demonstrating the use of animations in Angular!</p>
          <p>Choose from the selections in the navigation above...</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .intro {  
        margin-top: 10rem;
           }
     p {
        font-size: 1.2em;
        padding: 15px 0 0 0;
     }
`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
