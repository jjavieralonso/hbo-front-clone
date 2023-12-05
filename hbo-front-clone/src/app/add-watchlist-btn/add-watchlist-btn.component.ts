import { Component, Input } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-watchlist-btn',
  templateUrl: './add-watchlist-btn.component.html',
  styleUrl: './add-watchlist-btn.component.scss',
})
export class AddWatchlistBtnComponent {
  @Input() movie: any;
  isInWatchlist: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.isInWatchlist = this.movieService.isInWatchlist(this.movie);
  }

  toggleWatchlist() {
    if (this.isInWatchlist) {
      this.removeFromWatchlist();
    } else {
      this.addToWatchlist();
    }
  }

  addToWatchlist() {
    this.movieService.addToWatchlist(this.movie);
    this.isInWatchlist = true;
  }

  removeFromWatchlist() {
    this.movieService.removeFromWatchlist(this.movie);
    this.isInWatchlist = false;
  }
}
