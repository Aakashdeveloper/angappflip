import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IMobile } from '../models/home.model';
import { HomeService } from '../services/Home.service'

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {

  mobiles:IMobile[]=[]
  constructor(private homeService:HomeService ){}

  ngOnInit(){
    this.homeService.getMobiles()
      .subscribe((data:IMobile[])=> this.mobiles = data)
  }
  

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
