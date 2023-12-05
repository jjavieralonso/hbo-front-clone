import { Component, HostListener } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrl: './recently-added.component.scss',
})
export class RecentlyAddedComponent {
  recentlyAdded: any[] = [];

  constructor(private movieService: MovieService) {}

  firstVisibleIndex = 0;
  visibleCards = 0;
  cardWidth = 300;

  ngOnInit() {
    this.recentlyAdded = this.movieService.getRecentlyAdded();
    this.calculateVisibleCards();
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateVisibleCards();
  }

  get sliderPosition() {
    return -(this.firstVisibleIndex * (this.cardWidth + 26)) + 'px';
  }

  calculateVisibleCards() {
    this.visibleCards = Math.floor(window.innerWidth / this.cardWidth);
  }

  next() {
    if (
      this.firstVisibleIndex <
      this.recentlyAdded.length - this.visibleCards
    ) {
      this.firstVisibleIndex++;
    }
  }

  previous() {
    if (this.firstVisibleIndex > 0) {
      this.firstVisibleIndex--;
    }
  }
}
