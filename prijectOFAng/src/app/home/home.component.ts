import { Component } from '@angular/core';// import section
import { Router } from '@angular/router';

@Component({ //component directive: metadata of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { //component class:properties, constructor,lifecycle hooks, methods

  constructor(private router: Router){}

  SignUpCompo(){
    console.log("SignUpCompo fun calling");
    this.router.navigateByUrl("signUp")
  }
}
