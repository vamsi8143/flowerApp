import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css'],
})
export class ShowPasswordComponent implements OnInit {
  public inputType: String = 'password';
  constructor() {}

  ngOnInit(): void {}
  public showPassWord(event: any): void {
    // if (event.target.checked) {
    //   this.inputType = 'text';
    // } else {
    //   this.inputType = 'password';
    // }
    event.target.checked
      ? (this.inputType = 'text')
      : (this.inputType = 'password');
  }
}
