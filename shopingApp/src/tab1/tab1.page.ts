import { Component, ViewChild } from '@angular/core';
import { IonSlides  } from '@ionic/angular';

import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  
})

export class Tab1Page {
  openUrl(){ window.open('https://www.youtube.com', '_system'); }
  

  @ViewChild('slideWithNav', {static: true}) slideWithNav: IonSlides ;
  @ViewChild('slideWithNav2', {static: true}) slideWithNav2: IonSlides ;
  @ViewChild('slideWithNav3', {static: true}) slideWithNav3: IonSlides ;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
 
  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;
 
 
  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };
  nextpage() {
    this.route.navigate(['/home']);
  }


  news() {
    this.route.navigate(['/news']);
  }

  computer() {
    this.route.navigate(['/computer']);
  }
  
  constructor(private route: Router) {
    //Item object for Nature
    
    this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
            image: '../assets/images/a1.jpg'
          },
          {
            id: 2,
            image: '../assets/images/d.jpg'
          },
          {
            id: 3,
            image: '../assets/images/3.jpg'
          },
          {
            id: 4,
            image: '../assets/images/4.jpg'
          },
          {
            id: 5,
            image: '../assets/images/5.jpg'
          }
        ]
      };
    //Item object for Food
    this.sliderTwo =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 6,
            image: '../assets/images/1.jpg'
          },
          {
            id: 7,
            image: '../assets/images/d.jpg'
          },
          {
            id: 8,
            image: '../assets/images/3.jpg'
          },
          {
            id: 9,
            image: '../assets/images/4.jpg'
          },
          {
            id: 10,
            image: '../assets/images/5.jpg'
          }
        ]
      };
    //Item object for Fashion
    this.sliderThree =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 11,
            image: '../assets/images/1.jpg'
          },
          {
            id: 12,
            image: '../assets/images/d.jpg'
          },
          {
            id: 13,
            image: '../assets/images/3.jpg'
          },
          {
            id: 14,
            image: '../assets/images/4.jpg'
          },
          {
            id: 15,
            image: '../assets/images/5.jpg'
          }
        ]
      };
    
  }
  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
 
  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }
 
  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }
 
  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
 
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
