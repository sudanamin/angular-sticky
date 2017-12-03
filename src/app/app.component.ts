import { Component } from '@angular/core';


   import { Observable } from 'rxjs/Observable';
   import 'rxjs/add/operator/map';
  
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
 
  constructor() { }



}