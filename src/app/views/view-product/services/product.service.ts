import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    this.load()
   }

  private readonly url = 'https://dummyjson.com/products'
  public products:any = []

  load(){
    fetch(this.url).then( res => res.json())
                   .then( data => this.products = data.products )
  }
}
