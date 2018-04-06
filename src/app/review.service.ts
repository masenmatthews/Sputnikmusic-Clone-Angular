import { Injectable } from '@angular/core';
import { Review } from './models/review.model';
import { REVIEWS } from './mock-reviews';

@Injectable()
export class ReviewService {

  constructor() { }

  getReviews() {
    return REVIEWS;
  }

  getReviewById(reviewId: number){
  for (var i = 0; i <= REVIEWS.length - 1; i++) {
    if (REVIEWS[i].id === reviewId) {
      return REVIEWS[i];
    }
  }
}

  // deleteReview(localReviewToDelete){
  //  var albumEntryInFirebase = this.getReviewById(localReviewtoDelete.$key);
  //  reviewEntryInFirebase.remove();
  // }

}
