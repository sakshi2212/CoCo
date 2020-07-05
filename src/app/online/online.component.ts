import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  constructor() { }
  public message = '';
  public price = 0;
  public i: any = 0;
  public prod: string[];
  ngOnInit(): void {
  }
  receiveMessage($event){
      this.i = this.i + 1;
      this.message = this.message + this.i + '  ' + $event + '  ';

  }

  receiveMessage2($event){
    this.price = this.price + $event;
  }
}