import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Input() myBike;
  @Output() myYell = new EventEmitter();

  /*functionYell(e) {
    this.myYell.emit(e);
  }*/

  title = "Welcome to the homepage, here we have random stuff. Go to 'List Of Pencils' page to see the real stuff !!!";
  myString = "";

  myCar = {
    merk: "Honda",
    type: "CR-V"
  };

  myAlert(str) {
    alert(str);
  }

  myOperator = ['tambah','kurang','kali','bagi'];
  selected_operator= 'tambah';
  
  num1: number;
  num2: number;
  result: number;
  clear() {
    this.num1 = 0;
    this.num2 = 0;
    this.result = 0;
  }
  doCount(a:number, b:number) {
    if (this.selected_operator === 'tambah') {
      this.result = a+b;
    } else if (this.selected_operator === 'kurang') {
      this.result = a-b;
    } else if (this.selected_operator === 'kali') {
      this.result = a*b;
    } else if (this.selected_operator === 'bagi') {
      this.result = a/b;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
