import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})

export class NewReviewComponent {

  @Output() sendReview = new EventEmitter();

  submitForm(artist: string, album: string, genre: string, description: string, body: string, rating: number, id: number) {
    let newReview: Review = new Review(artist, album, genre, description, body, rating, id);
    this.sendReview.emit(newReview);
  }
}
