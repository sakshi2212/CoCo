import { Component, OnInit } from '@angular/core';
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
export class CoffeeComponent implements OnInit {

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


  ngOnInit(): void {
  }

}
