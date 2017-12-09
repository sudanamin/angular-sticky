import { Component, OnInit, Input  } from '@angular/core';
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
  _ref:any;   

  onInitSet: boolean = false;
  constructor() {
    
    console.log(" hi form consturucntor ");
    

   }
  deleteSticky(){

   // this.lss.hide();
   this._ref.destroy();

  } 

  addDraggable(){
    this.ngOnInit();
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

