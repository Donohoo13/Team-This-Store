import { Component, OnInit } from '@angular/core';
import {User} from '../models/users'

@Component({
  selector: 'app-user-form',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {

  model = new User("","","","","","",null)
  
  submitted = false;

  onSubmit(){ this.submitted = true;}
  
  newUser(){
    this.model = new User('','','','','','',0)
  }
}
