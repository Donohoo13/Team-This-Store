import { Component } from '@angular/core';
import { Show } from '../models/show'
// import { NullAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-show-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  model = new Show("","",null,"")
  
  submitted = false;

  onSubmit(){ this.submitted = true;}
  
  newShow(){
    this.model = new Show('','',0,'')
  }

}
