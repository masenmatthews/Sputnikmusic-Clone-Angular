import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { DetailReviewComponent } from './detail-review/detail-review.component';
import { ViewReviewComponent } from './view-review/view-review.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NewReviewComponent,
    EditReviewComponent,
    DetailReviewComponent,
    ViewReviewComponent,
    NewArticleComponent,
    EditArticleComponent,
    ViewArticleComponent,
    DetailArticleComponent,
    ShowReviewComponent,
    ShowArticleComponent,
    ReviewsComponent,
    HomeComponent,
    NewsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
