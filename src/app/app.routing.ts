import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
