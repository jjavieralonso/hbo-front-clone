import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MenuSideService } from '../../services/menu-side.service';

interface User {
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  user: User;

  constructor(
    private userService: UserService,
    private menuService: MenuSideService
  ) {
    this.user = this.userService.getFirstUser();
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.nav-container');
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage >= 20 && navbar) {
        navbar.classList.add('scrolled');
      } else if (navbar) {
        navbar.classList.remove('scrolled');
      }
    });
  }
  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
