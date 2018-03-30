import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ViewReviewComponent } from '../view-review/view-review.component';
import { Article } from '../models/article.model';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})

export class NewReviewComponent {

  @Output() sendReview = new EventEmitter();

  submitForm(artist: string, album: string, genre: string, description: string, body: string, rating: number) {
    let newReview: Review = new Review(artist, album, genre, description, body, rating);
    this.sendReview.emit(newReview);
  }
}
