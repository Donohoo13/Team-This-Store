import { Component, OnInit } from "@angular/core";
import { FetchdataService } from "../fetchdata.service";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
  providers: [FetchdataService]
})
export class ProductCardComponent implements OnInit {
  posts = [""];
  title = "Angular HttpClient";

  Url = "http://localhost:3000/shows";


  // inject FetchdataService service
  constructor(private srv: FetchdataService) {}

  getPosts(): void {
    this.srv
      .getData(this.Url)
      .subscribe(data => this.posts.push(...data),
       error => console.log(error));
  }

  ngOnInit() {
    this.getPosts();
  }
}
