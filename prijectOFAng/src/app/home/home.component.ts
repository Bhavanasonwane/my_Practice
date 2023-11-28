import { Component } from '@angular/core';// import section
import { Router } from '@angular/router';

@Component({ //component directive: metadata of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { //component class:properties, constructor,lifecycle hooks, methods

  //let / var / const 
  city : string = "pune";
  surName: any = true;
  name : string= "Bhavana"
  name2! : string;
  name3: any;


  constructor(private router: Router){}

  //LH, methods
  SignUpCompo(){
    this.name3 ="sonwane";
    console.log("SignUpCompo fun calling");
    this.router.navigateByUrl("signUp")// we have to write code before routing 
  }
test(){
  console.log("test calling,,,,,");
}

}

