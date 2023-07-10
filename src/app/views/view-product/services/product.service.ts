import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductResponse } from '../interfaces/product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    this.load()
   }

  private readonly url = 'https://dummyjson.com/products';
  public products:Product[] = []

  load(){
    fetch(this.url).then<ProductResponse>( res => res.json())
                   .then( data => this.products = data.products )
  }
}
