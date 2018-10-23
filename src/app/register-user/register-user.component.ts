import { Component, OnInit } from "@angular/core";
import { User } from "../models/users";

@Component({
  selector: "app-user-form",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.scss"]
})
export class RegisterUserComponent {
  model = new User("", "", "", "", "", "", null);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    this.model = new User("", "", "", "", "", "", 0);
  }

  convertShow(){
    const test = JSON.stringify(this.model);
    console.log(test);
    console.log(typeof(test))
    const newJsonObject=JSON.parse(test)
    console.log(newJsonObject);
    console.log(typeof(newJsonObject))
  }
}
