import { Component } from "@angular/core";

@Component({
  selector: "app-navigation",
  styleUrls: ["./navigation.component.scss"],
  templateUrl: "./navigation.component.html",
})
export class NavigationComponent {
  onFileChange(files: FileList) {
    console.log(files);
  }
}
