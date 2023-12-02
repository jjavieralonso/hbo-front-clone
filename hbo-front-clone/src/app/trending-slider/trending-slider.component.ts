import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-trending-slider',
  templateUrl: './trending-slider.component.html',
  styleUrl: './trending-slider.component.scss',
})
export class TrendingSliderComponent {
  trends = [
    { trendNumber: '1', trendImage: 'assets/images/slider-1/3.jpg' },
    { trendNumber: '2', trendImage: 'assets/images/slider-1/10.jpg' },
    { trendNumber: '3', trendImage: 'assets/images/slider-1/12.jpg' },
    { trendNumber: '4', trendImage: 'assets/images/slider-1/6.jpg' },
    { trendNumber: '5', trendImage: 'assets/images/slider-1/8.jpg' },
    { trendNumber: '6', trendImage: 'assets/images/slider-1/1.jpg' },
    { trendNumber: '7', trendImage: 'assets/images/slider-1/2.jpg' },
    { trendNumber: '8', trendImage: 'assets/images/slider-1/13.jpg' },
    { trendNumber: '9', trendImage: 'assets/images/slider-1/9.jpg' },
    { trendNumber: '10', trendImage: 'assets/images/slider-1/11.jpg' },
  ];

  firstVisibleIndex = 0;
  visibleCards = 0;
  cardWidth = 197;

  ngOnInit() {
    this.calculateVisibleCards();
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateVisibleCards();
  }

  get sliderPosition() {
    return -(this.firstVisibleIndex * (this.cardWidth + 11)) + 'px'; //8(gap) + 3(border-card) =11
  }

  calculateVisibleCards() {
    this.visibleCards = Math.floor(window.innerWidth / this.cardWidth);
  }

  calculateCardToSubstract(){
    if (window.innerWidth > 2450) {
      return 4;
    } else if ((window.innerWidth >=1440)&&(window.innerWidth<=2450)) {
      return 3;
    } else if ((window.innerWidth < 1440)&&(window.innerWidth>=1200)) {
      return 2;
    } else{
      return 2;
    }
  }

  next() {
    if (this.firstVisibleIndex < this.trends.length - (this.visibleCards - this.calculateCardToSubstract())) {
      this.firstVisibleIndex++;
    }
  }

  previous() {
    if (this.firstVisibleIndex > 0) {
      this.firstVisibleIndex--;
    }
  }
}
