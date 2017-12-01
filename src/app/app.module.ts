import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StickyComponentComponent } from './sticky-component/sticky-component.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyBs3l827jDcOmniFPenLdYA9AqS2pNRPxE",
  authDomain: "angular-sticky.firebaseapp.com",
  databaseURL: "https://angular-sticky.firebaseio.com",
  projectId: "angular-sticky",
  storageBucket: "angular-sticky.appspot.com",
  messagingSenderId: "655107197844"
  }

  
@NgModule({
  declarations: [
    AppComponent,
    StickyComponentComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
