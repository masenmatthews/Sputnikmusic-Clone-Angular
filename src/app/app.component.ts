import { Component } from '@angular/core';
import { Review } from './models/review.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sputnik Clone';

  masterReviewList: Review[] = [new Review("SampleArtist", "SampleAlbum", "SampleGenre", "SampleDescription", "SampleBody", 1, 0),
  new Review("Opeth", "Blackwater Park", "Progressive metal", "A timeless metal release", "INSERT REVIEW BODY HERE", 4, 1),
  new Review("The Hotelier", "Goodness", "Indie rock", "A great follow-up to their last album, but not quite as good", "INSERT REVIEW BODY HERE", 4, 2)];
  selectedReview: Review = null;
  selectedReview2: Review = null;
  showForm: boolean = false;

  updateShowForm(formState) {
    this.showForm = formState;
    this.selectedReview = null;
    this.selectedReview = null;
  }

  addReview(newReview: Review) {
    this.masterReviewList.push(newReview);
    this.showForm = false;
  }

  editReview(clickedReview) {
    this.selectedReview2 = clickedReview;
    this.selectedReview = null;
  }

  editBtnClicked(childSelectedReview) {
    console.log("review # " + childSelectedReview);
    childSelectedReview.editButtonClicked(childSelectedReview);
  }

  viewReview(clickedReview) {
    this.selectedReview = clickedReview;
    this.selectedReview2 = null;
    this.showForm = false;
  }

  finishedEditing() {
    this.selectedReview2 = null;
  }

  deleteReview() {
    let index = this.masterReviewList.indexOf(this.selectedReview2)
    this.masterReviewList.splice(index, 1);
    this.selectedReview2 = null;
  }
}
