import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-links",
  templateUrl: "./fav-links.component.html",
  styleUrls: ["./fav-links.component.css"],
})
export class FavLinksComponent implements OnInit {
  favLinks: [
    "https://www.espn.com",
    "https://www.w3schools",
    "https://www.google.com"
  ];

  constructor() {}

  ngOnInit() {}
}
