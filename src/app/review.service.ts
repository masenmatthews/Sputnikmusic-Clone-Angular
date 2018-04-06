import { Injectable } from '@angular/core';
import { Review } from './models/review.model';
import { REVIEWS } from './mock-reviews';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ReviewService {
  reviews: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.reviews = database.list('reviews');
  }

  getReviews() {
    return this.reviews;
  }

  addReview(newReview: Review) {
  this.reviews.push(newReview);
  }

  getReviewById(reviewId: number){
//   for (var i = 0; i <= REVIEWS.length - 1; i++) {
//     if (REVIEWS[i].id === reviewId) {
//       return REVIEWS[i];
//     }
//   }
}

  // deleteReview(localReviewToDelete){
  //  var albumEntryInFirebase = this.getReviewById(localReviewtoDelete.$key);
  //  reviewEntryInFirebase.remove();
  // }

}
