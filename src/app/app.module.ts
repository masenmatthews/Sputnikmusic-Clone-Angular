import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';

@NgModule({
  declarations: [
    AppComponent,
    NewReviewComponent,
    EditReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
