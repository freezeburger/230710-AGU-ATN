import { Inject, Injectable, Injector, inject } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductResponse } from '../interfaces/product-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*
  constructor(
    injector:Injector
  ) {
    const http = injector.get(HttpClient);
    console.log(http);
  }
  */

  http = inject(HttpClient);

  constructor(
    // @Inject(HttpClient) private http:HttpClient
    // private http:HttpClient
  ) {
    console.log(this.http);
  }

  private readonly url = 'https://dummyjson.com/products';
  public products:Product[] = []

  load(){
    this.http.get<ProductResponse>(this.url).subscribe( data => this.products = data.products );

    /*
    fetch(this.url).then<ProductResponse>( res => res.json() )
                   .then( data => this.products = data.products )
    */
  }
}
