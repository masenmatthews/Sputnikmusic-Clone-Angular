import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css'],
  providers: [ReviewService]
})

export class NewReviewComponent {
  constructor(private reviewService: ReviewService) { }
  @Output() sendReview = new EventEmitter();

  submitForm(artist: string, album: string, genre: string, description: string, body: string, rating: number) {
    let newReview: Review = new Review(artist, album, genre, description, body, rating);
    this.reviewService.addReview(newReview);
    console.log(newReview);
  }
}
