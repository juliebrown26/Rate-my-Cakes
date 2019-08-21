import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service';
import { Cake } from './cake';
import { Comment } from './comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Rate my Cakes';
  cakes: Cake[];
  oneCake: Cake;
  newCake: Cake;
  newComment: Comment;
  cake: Cake;

  constructor(private _cakeService: CakeService){ }
  ngOnInit(){
    this.getCakes();
    this.newCake = {name: '', image: '', comments: []};
    this.newComment = {rating: '5', content: ''}
  }
  onSubmit(){
    let observable = this._cakeService.addCake(this.newCake);
    observable.subscribe((data: Cake) => {
      console.log('got data from post back', data);
      this.newCake = {name: '', image: '', comments: []}
    })
  }
  getCakes(){
    console.log('got the cakes');
    let observable = this._cakeService.getCakes();
    observable.subscribe((data: Cake[]) => {
      this.cakes = data;
    })
  }
  onSubmitComment(cake: Cake){
    console.log('submitting comment');
    cake.comments.push(this.newComment);
    let observable = this._cakeService.updateCake(cake);
    observable.subscribe((data: Cake) => {
      this.newComment = {rating: '', content: ''};
    })
  }
  onCakeClick(cake: Cake){
    this.cake = cake;
  }
  getOneCake(cake: Cake){
    console.log('got one cake');
    let observable = this._cakeService.getOneCake(cake._id);
    observable.subscribe((data: Cake) => {
      this.cake = data;
    })
  }
};
