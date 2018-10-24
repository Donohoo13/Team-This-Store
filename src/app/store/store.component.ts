
import { Component } from "@angular/core";
import { Show } from "../models/show";
// import { NullAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  model = new Show("", "", null, "");

  submitted = false;

  constructor() {}

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {}

  newShow() {
    this.model = new Show("", "", 0, "");
  }

  convertShow() {
    const test = JSON.stringify(this.model);
    console.log(test);
    // console.log(typeof test);
    const newJsonObject = JSON.parse(test);
    console.log(newJsonObject);
    // console.log(typeof newJsonObject);
  }

  // getShows() {
  //   fetch("https://hapi-practice-ftjjbqgvls.now.sh/shows")
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //     });
  // }
}