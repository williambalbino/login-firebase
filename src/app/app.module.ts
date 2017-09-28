import { MenuTopComponent } from './menu-top/menu-top.component';
import { ProvaFormComponent } from './prova-form/prova-form.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2/index';
import { FirebaseConfig } from './../environments/firebase.config';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProvaFormComponent,
    MenuTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
