import { Component, HostListener } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-only-hbo-slider',
  templateUrl: './only-hbo-slider.component.html',
  styleUrl: './only-hbo-slider.component.scss',
})
export class OnlyHboSliderComponent {
  constructor(private movieService: MovieService){

  }
  movies : any[] = [];
  firstVisibleIndex = 0;
  visibleCards = 0;
  cardWidth = 197;

  ngOnInit() {
    this.calculateVisibleCards();
    this.movies = this.movieService.getOnlyInHBO();
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
