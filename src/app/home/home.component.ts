import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getUrl()
  {
    return '/src/assets/bg.jpg';
  }

  constructor() { }

  ngOnInit() {
  }

}
