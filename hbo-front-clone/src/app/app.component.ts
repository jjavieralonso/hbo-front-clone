import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hbo-front-clone';
  constructor(private movieService: MovieService){}

  getWatchlistCount(){
    return this.movieService.getWatchlistCount();
  }
}
