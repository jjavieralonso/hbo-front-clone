import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { OnlyHboSliderComponent } from './components/only-hbo-slider/only-hbo-slider.component';
import { TrendingSliderComponent } from './components/trending-slider/trending-slider.component';
import { RecentlyAddedComponent } from './components/recently-added/recently-added.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent,
    ImageSliderComponent,
    OnlyHboSliderComponent,
    TrendingSliderComponent,
    RecentlyAddedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
