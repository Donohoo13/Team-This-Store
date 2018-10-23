
import { Component } from '@angular/core';
import {Login} from '../models/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  model = new Login("","")
  
  submitted = false;

  onSubmit(){ this.submitted = true;}
  
  newLogin(){
    this.model = new Login('','')
  }

}
