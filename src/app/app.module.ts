import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMainNavigationComponent } from './user-main-navigation/user-main-navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserMyWorkComponent } from './user-my-work/user-my-work.component';
import { UserHireMeComponent } from './user-hire-me/user-hire-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserMainNavigationComponent,
    HomePageComponent,
    UserMyWorkComponent,
    UserHireMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
