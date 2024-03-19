import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnDestroy,OnInit {
  interval: any;
  i=0;
  constructor() {

  }
  ngOnInit(){

    this.interval = setInterval(() => {
      console.log("Interval");
      this.i = Math.floor(Math.random() * 4);
    }, 500);
  }
  ideasStyle() {
    let color = [
      {
        "background-color": "pink"
      },
      {
        "background-color": "red",
        "color":"white"
      },
      {
        "background-color": "orange",
        "color":"black"
      },
      {
        "background-color": "lavendar",
        "color":"white"
      },
    ];
    return color[this.i];
  }

  

  ngOnDestroy() {
    clearInterval(this.interval);
    console.log("onDestroy");
  }
}
