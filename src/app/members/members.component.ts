
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
declare var $: any;

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
// import { AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { LoadingStickyService } from '../core/loading-sticky.service';

interface Post {
  title: string;
  content: string;

}
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
//export class AppComponent {
export class MembersComponent {


  


  postCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(private lss:LoadingStickyService, private afs: AngularFirestore, public auth: AuthService) { }

  ngOnInit() {

  }

  loadData() {
    this.lss.reveal();
   // setTimeout(() => this.lss.hide(), 2000000);
  }
  ngAfterViewInit() {
    $(".sticker").draggable({
      stop: (event, ui) => {

        this.loadData() ;
      },
      revert: true,
      opacity: 0.5,
      revertDuration: 330,
      //    stack: ".head",
      distance: 0,
      // appentTo :
    });

  }
}