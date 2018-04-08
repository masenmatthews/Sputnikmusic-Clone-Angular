import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DetailReviewComponent } from './detail-review/detail-review.component'
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';
import { NewReviewComponent } from './new-review/new-review.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reviews/:id',
    component: DetailReviewComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'new-review',
    component: NewReviewComponent
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
