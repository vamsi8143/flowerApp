import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css'],
})
export class WishesComponent implements OnInit {
  public message: string = 'hello';
  constructor() {}

  ngOnInit(): void {}
  public updateMsg(msg: string): void {
    this.message = msg;
  }
}
