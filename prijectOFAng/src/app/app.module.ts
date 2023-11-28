import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ //component/pipe/directive
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    DatabindingComponent
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule, 
     FormsModule // in two way data binding we have to need of this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
