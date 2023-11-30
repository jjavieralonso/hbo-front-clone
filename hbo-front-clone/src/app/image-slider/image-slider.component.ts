import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  images = [
    'assets/images/slider/slider-1.jpg',
    'assets/images/slider/slider-2.jpg',
    'assets/images/slider/slider-3.jpg',
    'assets/images/slider/slider-4.jpg',
    'assets/images/slider/slider-5.jpg',
    'assets/images/slider/slider-6.jpg',
    'assets/images/slider/slider-7.jpg',
  ];
  currentImageIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
    }, 6000);
  }
  navigateToImage(index: number) {
    this.currentImageIndex = index;
  }
  get sliderPosition() {
  return -(this.currentImageIndex * 100) + '%';
}
}
