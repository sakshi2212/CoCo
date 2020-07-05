import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { Dialog2Component } from '../dialog2/dialog2.component';
import { Dialog3Component } from '../dialog3/dialog3.component';
import { Dialog4Component } from '../dialog4/dialog4.component';
import { Dialog5Component } from '../dialog5/dialog5.component';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent {
  name1 = "Cappuccino"
  price1=250;
  name2="Cold Coffee";
  price2=150;
  name3="Expresso";
  price3=180;
  name4="Americano";
  price4=200;
  name5="Mocha"
  price5=230;

  @Output() messageEvent = new EventEmitter<string>();
  @Output() messageEvent2 = new EventEmitter<number>();

  constructor(public dialog: MatDialog){}
 
  openDialog1(){
    this.dialog.open(Dialog1Component);
  }
  openDialog2(){
    this.dialog.open(Dialog2Component);
  }
  openDialog3(){
    this.dialog.open(Dialog3Component);
  }
  openDialog4(){
    this.dialog.open(Dialog4Component);
  }
  openDialog5(){
    this.dialog.open(Dialog5Component);
  }
  senditem1(){
    this.messageEvent.emit(this.name1)
    this.messageEvent2.emit(this.price1)
  }

  senditem2(){
    this.messageEvent.emit(this.name2)
    this.messageEvent2.emit(this.price2)
  }
  senditem3(){
    this.messageEvent.emit(this.name3)
    this.messageEvent2.emit(this.price3)
  }
  senditem4(){
    this.messageEvent.emit(this.name4)
    this.messageEvent2.emit(this.price4)
  }
  senditem5(){
    this.messageEvent.emit(this.name5)
    this.messageEvent2.emit(this.price4)
  }

}
