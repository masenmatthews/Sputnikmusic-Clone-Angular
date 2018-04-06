import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
