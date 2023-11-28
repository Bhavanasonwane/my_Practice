import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  //two types of databindng 1. one way Db, 2. two way Db
  //1. one way Db 
  //a. String interpolation {{}}
   //b. property binding[]
   //event binding()
   //2. two way databinding[()]

   data : any = "we are learning string interpolation";
   amount : Number = 900000;
   name = "bhavana";
   clickEventData:any;
   city: any = "latur";
   

   clickEvent(){
    this.clickEventData = 235686868;
   }
}
