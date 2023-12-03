import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrl: './recently-added.component.scss',
})
export class RecentlyAddedComponent {
  recentlyAdded = [
    'assets/images/added-covers/black-power.jpg',
    'assets/images/added-covers/reason.jpg',
    'assets/images/added-covers/mario-bros.jpg',
    'assets/images/added-covers/jokers.jpg',
    'assets/images/added-covers/prancer.jpg',
    'assets/images/added-covers/blue-beetle.jpg',
    'assets/images/added-covers/campeones.jpg',
    'assets/images/added-covers/nocivo.jpg',
    'assets/images/added-covers/were-here.jpg',
    'assets/images/added-covers/mon-heroine.jpg',
    'assets/images/added-covers/foreman.jpg',
    'assets/images/added-covers/peak.jpg',
    'assets/images/added-covers/genie.jpg',
    'assets/images/added-covers/love-has-won.jpg',
  ];
  
  firstVisibleIndex = 0;
  visibleCards = 0;
  cardWidth = 300;

  ngOnInit() {
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
    if (this.firstVisibleIndex < this.recentlyAdded.length - this.visibleCards) {
      this.firstVisibleIndex++;
    }
  }

  previous() {
    if (this.firstVisibleIndex > 0) {
      this.firstVisibleIndex--;
    }
  }
}
