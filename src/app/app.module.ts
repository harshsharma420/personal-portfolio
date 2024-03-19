import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMainNavigationComponent } from './user-main-navigation/user-main-navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserMyWorkComponent } from './user-my-work/user-my-work.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMainNavigationComponent,
    HomePageComponent,
    UserMyWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
