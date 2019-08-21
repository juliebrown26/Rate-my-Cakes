import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cake } from './cake';

@Injectable()
export class CakeService {
  constructor(private _cake: HttpClient) {
    this.getCakes();
   };
   getCakes(){
     return this._cake.get('/api/cakes');
   }
   getOneCake(_id: string){
     return this._cake.get(`/api/cakes/${_id}`);
   }
   addCake(newCake){
     return this._cake.post('/api/cakes', newCake);
   }
   newComment(newComment){
     return this._cake.post('/api/comments', newComment);
   }
   updateCake(cake:Cake){
     return this._cake.put(`/api/cakes/${cake._id}`, cake);
   }
}
