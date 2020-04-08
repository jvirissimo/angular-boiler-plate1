import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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