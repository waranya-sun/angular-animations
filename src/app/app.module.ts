import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { BasicComponent } from './basic.component';
import { AdvancedComponent } from './advanced.component';
import { ContainedComponent } from './contained.component';

import { RouterModule,Routes} from '@angular/router';
import { AnimboxComponent } from './animbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MouseComponent } from './mouse.component';
import { FadeblockComponent } from './fadeblock.component';

const animationRoutes:Routes = [
  {path:'animation-home', component: HomeComponent,
    data:{animation:{value:'home'}}
  },
  {path: 'animation-basic', component: BasicComponent,
    data: { animation:{value:'basic'}}
  },
  {path: 'animation-contained', component: ContainedComponent,
    data: { animation: {value:'contained'}}
  },
  {path: 'animation-advanced', component: AdvancedComponent,
    data: {animation: {value:'advanced'}}
  },
  {path: '', redirectTo: '/animation-home', pathMatch:'full',
    data: {animation: {value:'home'}}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    AdvancedComponent,
    ContainedComponent,
    AnimboxComponent,
    MouseComponent,
    FadeblockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(animationRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
