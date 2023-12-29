import { Component, OnInit } from '@angular/core';
import { Arrayimgs } from 'app/shared/Constants';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides: any[] = Arrayimgs;

  constructor() { }

  ngOnInit(): void {
    console.log(this.slides);
  }

}
