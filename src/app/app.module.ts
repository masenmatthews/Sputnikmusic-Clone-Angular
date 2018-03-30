import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { DetailReviewComponent } from './detail-review/detail-review.component';
import { ViewReviewComponent } from './view-review/view-review.component';
import { NewArticleComponent } from './new-article/new-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NewReviewComponent,
    EditReviewComponent,
    DetailReviewComponent,
    ViewReviewComponent,
    NewArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
