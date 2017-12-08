
import { AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument } from 'angularfire2/firestore';
declare var $: any;
import { 
   
  ViewChild, 
  ComponentFactoryResolver,
  ViewContainerRef } from '@angular/core';
   import { Observable } from 'rxjs/Observable';
   import 'rxjs/add/operator/map';

   import { Component, OnInit, ElementRef } from '@angular/core';
   import * as firebase from 'firebase/app';
  // import { AngularFireAuth, AuthProviders, AuthMethods } from 'angularfire2/auth';
   import { Router } from '@angular/router';
   import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { AuthService } from '../core/auth.service';
import { StickyComponentComponent } from '../sticky-component/sticky-component.component';
  
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

    @ViewChild('parent', { read: ViewContainerRef }) container: ViewContainerRef;

    sticky : any ;
    htmlToAdd : string ;
    stickyCompo  =  `<app-sticky-component></app-sticky-component>`;
  

  postCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;


  constructor(private _cfr: ComponentFactoryResolver,private afs: AngularFirestore, public auth: AuthService, private elementRef:ElementRef) {}
  
    ngOnInit() {
 
    }
    ngAfterViewInit() {
      $(".sticker").draggable({  stop: ( event, ui ) => {
        
                //this.sticky = document.createElement("app-sticky-component");
               
                
           //     this.stickyCompo  = "<p>aaaaaaaaaaaa</p>";
           var comp = this._cfr.resolveComponentFactory(StickyComponentComponent);
           var expComponent = this.container.createComponent(comp);
           expComponent.instance._ref = expComponent;
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