import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductEntity } from 'src/app/Entity/ProductEntity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  getProducts(): Observable<ProductEntity[]>{
    return this.http.get<ProductEntity[]>("http://localhost:8080/cart/list");
  }
  addtoCart(product : ProductEntity):Observable<ProductEntity>
  {
    return this.http.post<ProductEntity>("http://localhost:8080/cart/create",product);
  }
  getTotalPrice() :Observable<number>{
    return this.http.get<number>("http://localhost:8080/cart/totalPrice");
  }
  removeCartItem(idProduct:number):Observable<void>{
    return this.http.post<void>(`http://localhost:8080/cart/delete`,idProduct);
  }
  removeAllCart():Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/cart/deleteAll`);
  }
}