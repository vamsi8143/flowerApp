import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  public image1: String =
    'https://www.pexels.com/photo/bokeh-photo-of-white-and-red-flowers-696996';
  public image2: String =
    'https://www.pexels.com/photo/close-up-photo-of-sunflower-64221';
  public image3: String =
    'https://www.pexels.com/photo/purple-bell-flowers-128868/';

  // public time:string= new Date().toLocaleTimeString;
  public getDate(): any {
    return new Date();
  }

  constructor() {
    //updateTime();
  }
  // public updateTime():void{
  //   setInterval(()=>
  //   {
  //     this.time =new Date().toLocaleTimeString;
  //   },1000)
  // }

  ngOnInit(): void {}
}
