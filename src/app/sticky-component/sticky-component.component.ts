import { Component, OnInit, Input  } from '@angular/core';


import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector
} from '@angular/core';

import {
  ComponentType,
  Portal,
  ComponentPortal,
  DomPortalHost
} from '@angular/cdk/portal';

//import { MembersComponent } from '../members/members.component'
//import { LoadingStickyService } from '../core/loading-sticky.service';
declare var $: any;

//import * as elementResizeDetectorMaker from '.../../element-resize-detector';
//import { LoadingStickyService } from '../core/loading-sticky.service';
@Component({
  selector: 'app-sticky-component',
  templateUrl: './sticky-component.component.html',
  styleUrls: ['./sticky-component.component.css']
})
export class StickyComponentComponent  {
  
 /* zIndex : number = 100;
  @Input() idd: String;*/
  private loadingSpinnerPortal: ComponentPortal<StickyComponentComponent>;
  
    // 2. Reference to our Portal Host.
    //    We use DOMPortalHost as we'll be using document.body as our anchor.
    private bodyPortalHost: DomPortalHost;

  _ref:any;   

  onInitSet: boolean = false;
  constructor( private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {  this.loadingSpinnerPortal = new ComponentPortal(StickyComponentComponent); }
  deleteSticky(){

   // this.lss.hide();
   this._ref.destroy();

  } 
  reveal() {
    
        this.bodyPortalHost = new DomPortalHost(
          document.body,
          this.componentFactoryResolver,
          this.appRef,
          this.injector);
        // 6. Attach the Portal to the PortalHost.
        var s = this.bodyPortalHost.attach(this.loadingSpinnerPortal);
        s.instance._ref = s;
      }
    
      hide() {
        // 7. Detach the Portal from the PortalHost
        this.bodyPortalHost.detach();
      }
    
    
  addDraggable(){
  
    this.ngOnInit();
   
  }
  addSticky()
  {
    //this.membercomponent.createSticky();
    console.log("hi form sticky compoentnt");

    this.reveal();
  }
  setDrag(){
    
    if(!this.onInitSet){
      console.log("mouse over");
    this.ngOnInit();
    this.onInitSet = true;
    }
  }


 // console.log(`hi from inside commponent `); 
 ngOnInit ()
{
 if(!this.onInitSet)

 
 {
  this.onInitSet = true;
  console.log(`hi from onit `); 
  $(".head").draggable({  stop: ( event, ui ) => {
    
            //this.sticky = document.createElement("app-sticky-component");
           
            
       //     this.stickyCompo  = "<p>aaaaaaaaaaaa</p>";
      
          },
         //   revert: true,
            opacity: 0.5,
            handle: ".spec",
              stack: ".head",
            distance: 0,
            // appentTo :
        });



        
     
  /* let _elementResizeDetector = elementResizeDetectorMaker({
      strategy: 'scroll'
    });

    _elementResizeDetector.listenTo(document.getElementsByClassName('sticker2'),function(element) {
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      console.log("Size: " + width + "x" + height + "element id is "+ element.id);
  })*/

 //console.log(this.idd);
  }
}
 
}

