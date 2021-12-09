import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/Entity/cartEntity';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
  getProducts(idUser: number): Observable<Cart[]>{
    return this.http.post<Cart[]>("http://localhost:8080/cart/list",idUser);
  }
  addtoCart(idPoduct :number,idUser: number):Observable<Cart>
  {
    return this.http.post<Cart>("http://localhost:8080/cart/create",{
      idPoduct,
      idUser
    });
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