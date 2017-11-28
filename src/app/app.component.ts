import { Component } from '@angular/core';
declare var $: any;

import * as elementResizeDetectorMaker from 'element-resize-detector';

  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit() { 
    
    console.log(`hi from inside commponent `); 
  //  $("#amin").draggable();


    let _elementResizeDetector = elementResizeDetectorMaker({
      strategy: 'scroll'
    });

    _elementResizeDetector.listenTo(document.getElementById('amin'),function(element) {
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      console.log("Size: " + width + "x" + height);
  })

  _elementResizeDetector.listenTo(document.getElementById('abc'),function(element) {
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    console.log("Size: " + width + "x" + height);
})
  
  }
}
