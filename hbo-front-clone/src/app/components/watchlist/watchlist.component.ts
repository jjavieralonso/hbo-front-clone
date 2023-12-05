import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss',
})
export class WatchlistComponent implements OnInit {
  movies: { id: number; title: string; cover: string; trending: boolean; recentlyAdded: boolean; isFilm: boolean; onlyInHBO: boolean; watchlist: boolean; }[] = [];

  constructor(private movieService: MovieService) {}

firstVisibleIndex = 0;
  visibleCards = 0;
  cardWidth = 197;

  ngOnInit() {
    this.calculateVisibleCards();
    this.movies = this.movieService.getWatchlist();
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
