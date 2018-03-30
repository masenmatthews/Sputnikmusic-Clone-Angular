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
    ShowArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
