import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Pictures I love to see";
  image1 =
    "https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png";
  image2 = "http://wallpapercave.com/wp/E6NlPya.jpg";
  image3 = "http://getwallpapers.com/wallpaper/full/c/0/8/111746.jpg";

  constructor() {}

  ngOnInit() {}
}
