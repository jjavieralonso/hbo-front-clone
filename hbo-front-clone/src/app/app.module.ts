import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { OnlyHboSliderComponent } from './only-hbo-slider/only-hbo-slider.component';
import { TrendingSliderComponent } from './trending-slider/trending-slider.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent,
    ImageSliderComponent,
    OnlyHboSliderComponent,
    TrendingSliderComponent,
    RecentlyAddedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
