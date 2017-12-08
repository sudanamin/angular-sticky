import { Component, OnInit, Input  } from '@angular/core';
declare var $: any;

import * as elementResizeDetectorMaker from '.../../element-resize-detector';
@Component({
  selector: 'app-sticky-component',
  templateUrl: './sticky-component.component.html',
  styleUrls: ['./sticky-component.component.css']
})
export class StickyComponentComponent implements OnInit {
  
  _ref:any;   
  zIndex : number = 100;
  @Input() idd: String;
  constructor() {
    
    console.log(" hi form consturucntor ");
    

   }
  deleteSticky(){

    console.log(" hi form consturucntor ");
    this._ref.destroy();
  } 

  addDraggable(){
    this.ngOnInit();
  }


 // console.log(`hi from inside commponent `); 
 ngOnInit ()
 
 {
 
  console.log(`hi from onit `+this.idd); 
  $(".head").draggable({  stop: ( event, ui ) => {
    
            //this.sticky = document.createElement("app-sticky-component");
           
            
       //     this.stickyCompo  = "<p>aaaaaaaaaaaa</p>";
      
          },
         //   revert: true,
            opacity: 0.5,
           
            //    stack: ".head",
            distance: 0,
            // appentTo :
        });



        
     
   let _elementResizeDetector = elementResizeDetectorMaker({
      strategy: 'scroll'
    });

    _elementResizeDetector.listenTo(document.getElementsByClassName('sticker2'),function(element) {
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      console.log("Size: " + width + "x" + height + "element id is "+ element.id);
  })

 console.log(this.idd);
  }

 
}

