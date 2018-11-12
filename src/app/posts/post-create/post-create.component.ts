import { Component } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.componet.css"]
})
export class PostCreateComponent {
  enteredValue = "";
  newPost = "NO CONTENT";
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
