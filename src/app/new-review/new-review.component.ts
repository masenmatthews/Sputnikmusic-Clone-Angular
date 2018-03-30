import { Component, OnInit } from '@angular/core';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})

export class NewReviewComponent implements OnInit {

  @Output() sendReview = new EventEmitter();

  submitForm(artist: string, album: string, genre: string, title: string, description: string, body: string, rating: number) {
    let newReview: Review = new Review(artist, album, genre, title, description, body, rating);
    this.sendReview.emit(newReview);
  }
}
