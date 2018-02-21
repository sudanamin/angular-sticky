import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StickyComponentComponent } from './sticky-component/sticky-component.component';

import { CoreModule } from './core/core.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.guard';
import { routes } from './app.routes';
import { LoadingStickyService } from './core/loading-sticky.service';

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
    StickyComponentComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
   AngularFireModule.initializeApp(firebaseConfig),
    
    routes,
    CoreModule
  ],
  providers: [AuthGuard, LoadingStickyService],
  bootstrap: [AppComponent],
  entryComponents: [StickyComponentComponent]
})
export class AppModule { }
