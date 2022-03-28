import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css'],
})
export class LoggedComponent implements OnInit {
  public isLogg: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public logIn(): void {
    this.isLogg = true;
  }
  public logOut(): void {
    this.isLogg = false;
  }
}
