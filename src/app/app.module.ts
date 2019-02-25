import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularjsModule } from './angularjs/angularjs.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
