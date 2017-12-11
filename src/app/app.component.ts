
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
declare var $: any;

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
// import { AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { LoadingStickyService } from './core/loading-sticky.service';
    interface Post{
    title : string ;
    content : string ;
  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  StickyColor: string;
  
  
    
   
  
    postCol: AngularFirestoreCollection<Post>;
    posts: Observable<Post[]>;
  
    constructor(private lss:LoadingStickyService, private afs: AngularFirestore) { }
  
  
    addSticky()
    {
      //this.membercomponent.createSticky();
      console.log("hi form members");
    }
  
    setColor(event)
    {
      //this.membercomponent.createSticky();
      this.StickyColor = event.target.style.backgroundColor;
    }
  
    ngOnInit() {
  
    }
  
     createSticky(StickyColor:string) {
      this.lss.reveal(StickyColor);
     // setTimeout(() => this.lss.hide(), 2000000);
    }
    ngAfterViewInit() {
      $(".sticker").draggable({
        stop: (event, ui) => {
        //var StickyColor = $(this.).css("background-color");
         console.log("hi from members appppppppppp"+ this.StickyColor);
         this.createSticky(this.StickyColor) ;
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