import { Component } from '@angular/core';
import { Show } from '../models/show'
// import { NullAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-show-form',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.scss']
})
export class AddShowComponent {

  model = new Show("","",null,"")
  
  submitted = false;

  onSubmit(){ this.submitted = true;}
  
  newShow(){
    this.model = new Show('','',0,'')
  }

}
