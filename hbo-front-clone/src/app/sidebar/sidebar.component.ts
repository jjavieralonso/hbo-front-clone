import { Component } from '@angular/core';
import { MenuSideService } from '../menu-side.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  porcentajeSidebar: number = 22;
  menuOpen = false;

  constructor(private menuService: MenuSideService) {
    this.menuService.menuOpen$.subscribe((open) => {
      this.menuOpen = open;
    });
  }
  toggleMenu() {
    this.menuService.toggleMenu();
  }
  scrollToElement(elementId: string) {
    this.toggleMenu();
    const element = document.getElementById(elementId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
