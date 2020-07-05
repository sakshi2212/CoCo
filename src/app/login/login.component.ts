import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  @Output() messageEvent = new EventEmitter<string>();

  public username: string;
  public newuser : string;
  public email  :string;
  constructor() { }
  
  senditem1(){
    this.messageEvent.emit(this.username)
  }
}
