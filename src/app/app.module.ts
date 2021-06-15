import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './conmponents/login/login.component';
import { Register1Component } from './conmponents/register1/register1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Register1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
