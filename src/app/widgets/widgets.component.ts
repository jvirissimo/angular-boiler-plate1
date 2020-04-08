import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent implements OnInit {

  clickCounter: number = 0;
  name: string = 'Zed is dead'

  constructor() { }

  ngOnInit() {
  }

  countClick(){
    this.clickCounter +=1;
  }

  setClass(){
    let myClasses = {
      active: this.clickCounter > 4,
      inactive: this.clickCounter <= 4,
    }
    return myClasses;
  }
}