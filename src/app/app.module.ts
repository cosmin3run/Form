import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DrivenFormComponent } from './components/driven-form/driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

const routes: Route[] = [
  {
    path: '',
    component: DrivenFormComponent
  },
  {
    path: 'reactiveform',
    component: ReactiveFormComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
 
    DrivenFormComponent,
      ReactiveFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
