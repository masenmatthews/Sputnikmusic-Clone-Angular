import { Component } from '@angular/core';
import { Review } from './models/review.model';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sputnik Clone';

  masterReviewList: Review[] = [new Review("SampleArtist", "SampleAlbum", "SampleGenre", "SampleDescription", "SampleBody", 3),
  new Review("Opeth", "Blackwater Park", "Progressive metal", "A timeless metal release", "INSERT REVIEW BODY HERE", 4),
  new Review("The Hotelier", "Goodness", "Indie rock", "A great follow-up to their last album, but not quite as good", "INSERT REVIEW BODY HERE", 4)];
  selectedReview: Review = null;
  selectedReview2: Review = null;

  masterArticleList: Article[] = [new Article("Dave Matthews Band detained at border", "INSERT ARTICLE BODY HERERE"),
  new Article("Motley Crue calls it quits", "Finally"),
  new Article("Kenny Chesney banned from Pittsburgh", "is anyone upset?")];
  selectedArticle: Article = null;
  selectedArticle2: Article = null;
  showForm: boolean = false;

  updateShowForm(formState) {
    this.showForm = formState;
    this.selectedReview = null;
    this.selectedReview2 = null;
    this.selectedArticle = null;
    this.selectedArticle2 = null;
  }

  addReview(newReview: Review) {
    this.masterReviewList.push(newReview);
    this.showForm = false;
  }

  addArticle(newArticle: Article) {
    this.masterArticleList.push(newArticle);
    this.showForm = false;
  }

  editReview(clickedReview) {
    this.selectedReview2 = clickedReview;
    this.selectedReview = null;
  }

  editArticle(clickedArticle) {
    this.selectedArticle2 = clickedArticle;
    this.selectedArticle = null;
  }

  // editBtnClicked(childSelectedReview) {
  //   console.log(childSelectedReview);
  //   childSelectedReview.editButtonClicked(childSelectedReview);
  // }

  viewReview(clickedReview) {
    this.selectedReview = clickedReview;
    this.selectedReview2 = null;
    this.showForm = false;
  }

  viewArticle(clickedArticle) {
    this.selectedArticle = clickedArticle;
    this.selectedArticle2 = null;
    this.showForm = false;
  }

  finishedReviewEditing() {
    this.selectedReview2 = null;
  }

  finishedArticleEditing() {
    this.selectedArticle2 = null;
  }

  deleteReview() {
    let index = this.masterReviewList.indexOf(this.selectedReview2)
    this.masterReviewList.splice(index, 1);
    this.selectedReview2 = null;
  }

  deleteArticle() {
    let index = this.masterArticleList.indexOf(this.selectedArticle2)
    this.masterArticleList.splice(index, 1);
    this.selectedArticle2 = null;
  }
}
