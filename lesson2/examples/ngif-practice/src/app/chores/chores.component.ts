import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chores",
  templateUrl: "./chores.component.html",
  styleUrls: ["./chores.component.css"],
})
export class ChoresComponent implements OnInit {
  chores = ["Buy groceries", "Cook dinner"];
  finishedChores = [
    "Complete LaunchCode work",
    "Empty dishwasher",
    "Laundry",
    "Dust shelves",
    "Cut grass",
  ];

  treats = [
    "The chores list must be empty.",
    "The Done list must have at least 4 items.",
  ];

  trophyImage =
    "https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png";

  constructor() {}

  ngOnInit() {}
}
