import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thems',
  templateUrl: './thems.component.html',
  styleUrls: ['./thems.component.css'],
})
export class ThemsComponent implements OnInit {
  public darkTheme: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
