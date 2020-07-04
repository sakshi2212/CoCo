import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Dialog6Component } from '../dialog6/dialog6.component';
import { Dialog7Component } from '../dialog7/dialog7.component';
import { Dialog8Component } from '../dialog8/dialog8.component';
import { Dialog9Component } from '../dialog9/dialog9.component';
import { Dialog10Component } from '../dialog10/dialog10.component';

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.css']
})
export class ChocolateComponent implements OnInit {

  name1="Chocolate Bars"
  price1=200;
  name2="Salted Co. Cho ";
  price2=150;
  name3="Fruit N' Nut";
  price3=250;
  name4="Peanut Cookies";
  price4=300;
  name5="Namaomi Bars"
  price5=350;




  constructor(public dialog: MatDialog){}
 
  openDialog1(){
    this.dialog.open(Dialog6Component);
  }
  openDialog2(){
    this.dialog.open(Dialog7Component);
  }
  openDialog3(){
    this.dialog.open(Dialog8Component);
  }
  openDialog4(){
    this.dialog.open(Dialog9Component);
  }
  openDialog5(){
    this.dialog.open(Dialog10Component);
  }

  ngOnInit(): void {
  }

}
