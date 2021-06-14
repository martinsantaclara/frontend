import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { Login2Component } from './components/login2/login2.component';
import { RegisterComponent } from './components/register/register.component';
import { Register1Component } from './components/register1/register1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    RegisterComponent,
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
