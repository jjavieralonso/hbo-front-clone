import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private mediaContent =[
    {id: 1, title: 'Campeones', cover: 'assets/images/added-covers/campeones.jpg', trending: false, recentlyAdded: true, isFilm: true, onlyInHBO: false},
    {id: 2, title: 'Jokers', cover: 'assets/images/added-covers/jokers.jpg', trending: false, recentlyAdded: true, isFilm: false, onlyInHBO: false},
    {id: 3, title: 'Mario Bros', cover: 'assets/images/added-covers/mario-bros.jpg', trending: true, recentlyAdded: true, isFilm: true, onlyInHBO: false},
    {id: 4, title: 'Rick & Morty', cover: 'assets/images/slider-1/rick-morty.jpg', trending: true, recentlyAdded: false, isFilm: false, onlyInHBO: true},
    {id: 5, title: 'La vida secreta de tu mente', cover: 'assets/images/slider-1/secret-life-mind.jpg', trending: false, recentlyAdded: false, isFilm: false, onlyInHBO: true},
    {id: 6, title: 'Lakers', cover: 'assets/images/slider-1/lakers.jpg', trending: false, recentlyAdded: false, isFilm: false, onlyInHBO: true},
    {id: 7, title: 'Friends', cover: 'assets/images/slider-1/friends.jpg', trending: true, recentlyAdded: false, isFilm: false, onlyInHBO: false},
    {id: 8, title: 'Black Power', cover: 'assets/images/added-covers/black-power.jpg', trending: false, recentlyAdded: true, isFilm: true, onlyInHBO: true},
    {id: 9, title: 'Blue Beetle', cover: 'assets/images/added-covers/blue-beetle.jpg', trending: false, recentlyAdded: true, isFilm: true, onlyInHBO: false},
    {id: 10, title: 'Foreman', cover: 'assets/images/added-covers/foreman.jpg', trending: false, recentlyAdded: true, isFilm: true, onlyInHBO: true},
    {id: 11, title: 'Genie', cover: 'assets/images/added-covers/genie.jpg', trending: false, recentlyAdded: false, isFilm: true, onlyInHBO: false},
    {id: 12, title: 'Love has Won', cover: 'assets/images/added-covers/love-has-won.jpg', trending: false, recentlyAdded: false, isFilm: false, onlyInHBO: true},
    {id: 13, title: 'Mon heroine', cover: 'assets/images/added-covers/mon-heroine.jpg', trending: false, recentlyAdded: false, isFilm: true, onlyInHBO: false},
    {id: 14, title: 'Pagan Peak', cover: 'assets/images/added-covers/peak.jpg', trending: false, recentlyAdded: false, isFilm: false, onlyInHBO: false},
    {id: 15, title: 'La Razón de estar contigo', cover: 'assets/images/added-covers/reason.jpg', trending: false, recentlyAdded: false, isFilm: true, onlyInHBO: false},
    {id: 16, title: 'Nocivo', cover: 'assets/images/added-covers/nocivo.jpg', trending: true, recentlyAdded: false, isFilm: true, onlyInHBO: false},
    {id: 17, title: "We're here", cover: 'assets/images/added-covers/were-here.jpg', trending: false, recentlyAdded: false, isFilm: false, onlyInHBO: true},
    {id: 18, title: '30 monedas', cover: 'assets/images/slider-1/30-monedas.jpg', trending: false, recentlyAdded: true, isFilm: false, onlyInHBO: true},
    {id: 19, title: 'Aqua Teen Hunger Force', cover: 'assets/images/slider-1/aqua.jpg', trending: false, recentlyAdded: false, isFilm: false, onlyInHBO: true},
    {id: 20, title: 'Bookie', cover: 'assets/images/slider-1/bookie.jpg', trending: false, recentlyAdded: true, isFilm: false, onlyInHBO: true},
    {id: 21, title: 'Friends: The reunion', cover: 'assets/images/slider-1/friends-reunion.jpg', trending: false, recentlyAdded: false, isFilm: true, onlyInHBO: true},
    {id: 22, title: 'La Hija de Dios', cover: 'assets/images/slider-1/hija-de-dios.jpg', trending: false, recentlyAdded: true, isFilm: false, onlyInHBO: true},
    {id: 23, title: 'Maldito Rap', cover: 'assets/images/slider-1/maldito-rap.jpg', trending: false, recentlyAdded: true, isFilm: false, onlyInHBO: false},
    {id: 24, title: 'Tokyo Vice', cover: 'assets/images/slider-1/tokyo-vice.jpg', trending: false, recentlyAdded: false, isFilm: true, onlyInHBO: false},
    {id: 25, title: 'Wizarding World', cover: 'assets/images/slider-1/wizarding-world.jpg', trending: false, recentlyAdded: false, isFilm: true, onlyInHBO: true},
    {id: 26, title: 'Newsroom', cover: 'assets/images/slider-1/newsroom.jpg', trending: false, recentlyAdded: true, isFilm: false, onlyInHBO: true},
  ]
  getTrends(){
    return this.mediaContent.filter(item => item.trending === true);
  }
  getFilms(){
    return this.mediaContent.filter(item => item.isFilm === true);
  }
  getSeries(){
    return this.mediaContent.filter(item => item.isFilm === false);
  }
  getOnlyInHBO(){
    return this.mediaContent.filter(item => item.onlyInHBO === true);
  }
  getRecentlyAdded(){
    return this.mediaContent.filter(item => item.recentlyAdded === true);
  }
}
