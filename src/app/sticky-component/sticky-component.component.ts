import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

import * as elementResizeDetectorMaker from '.../../element-resize-detector';
@Component({
  selector: 'app-sticky-component',
  templateUrl: './sticky-component.component.html',
  styleUrls: ['./sticky-component.component.css']
})
export class StickyComponentComponent implements OnInit {
  

  @Input() idd: String;
  constructor() { }

  ngOnInit() { 
    
    console.log(`hi from inside commponent `); 
    $(".head").draggable({
      stop: function( event, ui ) {

           var element = ui;



          var xxx = ui.offset;
    /*      $.ajax({
              type: 'post',
              url: '/updatePosition',
              data: { elementID : elementIdIndex ,x: xxx.left , y: xxx.top },
              dataType: 'text',
              success: function (data) {
                  console.log("data has been inserted");

              }
          });*/

      },
      handle: ".spec",
      opacity: 0.5,
      stack: "div",
      distance: 0
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

