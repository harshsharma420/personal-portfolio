import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserMyWorkComponent } from './user-my-work/user-my-work.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'my-work',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomePageComponent,
  },
  {
    path:'my-work',
    component:UserMyWorkComponent
  },
  {
    path:'**',
    component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
