import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-only-hbo-slider',
  templateUrl: './only-hbo-slider.component.html',
  styleUrl: './only-hbo-slider.component.scss',
})
export class OnlyHboSliderComponent {
  movies = [
    'assets/images/slider-1/1.jpg',
    'assets/images/slider-1/2.jpg',
    'assets/images/slider-1/3.jpg',
    'assets/images/slider-1/4.jpg',
    'assets/images/slider-1/5.jpg',
    'assets/images/slider-1/6.jpg',
    'assets/images/slider-1/7.jpg',
    'assets/images/slider-1/8.jpg',
    'assets/images/slider-1/9.jpg',
    'assets/images/slider-1/10.jpg',
    'assets/images/slider-1/11.jpg',
    'assets/images/slider-1/12.jpg',
    'assets/images/slider-1/13.jpg',
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

  next() {
    if (this.firstVisibleIndex < this.movies.length - this.visibleCards) {
      this.firstVisibleIndex++;
    }
  }

  previous() {
    if (this.firstVisibleIndex > 0) {
      this.firstVisibleIndex--;
    }
  }
}
