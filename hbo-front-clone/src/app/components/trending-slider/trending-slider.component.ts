import { Component, HostListener } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-trending-slider',
  templateUrl: './trending-slider.component.html',
  styleUrl: './trending-slider.component.scss',
})
export class TrendingSliderComponent {
  constructor(private movieService: MovieService){}
  trends : any[] = [];

  firstVisibleIndex = 0;
  visibleCards = 0;
  cardWidth = 197;

  index = 0;
  incrementIndex() {
    this.index++;
    return this.index;
  }

  ngOnInit() {
    this.calculateVisibleCards();
    this.trends = this.movieService.getTrends();
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
