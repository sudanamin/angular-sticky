
import { AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument } from 'angularfire2/firestore';

   import { Observable } from 'rxjs/Observable';
   import 'rxjs/add/operator/map';

   import { Component, OnInit } from '@angular/core';
   import * as firebase from 'firebase/app';
  // import { AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2/auth';
   import { Router } from '@angular/router';
   import { moveIn, fallIn, moveInLeft } from '../router.animations';
  
    interface Post{
    title : string ;
    content : string ;
  }
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
//export class AppComponent {
  export class MembersComponent {
 /* title = 'app';
  stickies : any[] = [
    {
      "id": "1"
    },
    {
      "id": "2"
    },
    {
      "id": "3"
    },
    {
      "id": "4"
    },
  ]
  constructor() { }*/

  postCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;


  constructor(private afs: AngularFirestore) {}
  
    ngOnInit() {

      this.postCol = this.afs.collection('stickyNotes');
      this.posts = this.postCol.valueChanges();
  
    }
}