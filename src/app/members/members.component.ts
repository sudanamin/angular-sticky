
import { AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument } from 'angularfire2/firestore';
declare var $: any;

   import { Observable } from 'rxjs/Observable';
   import 'rxjs/add/operator/map';

   import { Component, OnInit, ElementRef } from '@angular/core';
   import * as firebase from 'firebase/app';
  // import { AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2/auth';
   import { Router } from '@angular/router';
   import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { AuthService } from '../core/auth.service';
  
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

    sticky : any ;
    htmlToAdd : string ;
    stickyCompo  =  `<app-sticky-component></app-sticky-component>`;
   // stickyCompo = "<app-sticky-component></app-sticky-component>";
 //  stickyCompo
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


  constructor(private afs: AngularFirestore, public auth: AuthService, private elementRef:ElementRef) {}
  
    ngOnInit() {
     // this.htmlToAdd = '<app-sticky-component></app-sticky-component>';
    
   /*   this.postCol = this.afs.collection('stickyNotes');
      this.posts = this.postCol.valueChanges();*/
  
    }
    ngAfterViewInit() {
      $(".sticker").draggable({  stop: ( event, ui ) => {
        
                //this.sticky = document.createElement("app-sticky-component");
               
                
           //     this.stickyCompo  = "<p>aaaaaaaaaaaa</p>";
                
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