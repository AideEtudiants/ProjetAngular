
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductEntity } from '../Entity/ProductEntity';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {  }
  getAllProducts() : Observable<ProductEntity[]>{
    return this.http.get<ProductEntity[]>("http://localhost:8080/products");
  }
  getProductById(idProduct: number):Observable<ProductEntity>{
    return this.http.get<ProductEntity>("http://localhost:8080/product/{'idProduct'}");
  }
  updatProcut(productToUpdate:number):Observable<ProductEntity>{
    return this.http.post<ProductEntity>("http://localhost:8080/product",productToUpdate);
  }
  RemoveProduct(idProduct:number):Observable<ProductEntity>{
    return this.http.post<ProductEntity>("http://localhost:8080/productDeleted",idProduct);
  }
  addProduct(newProduct:ProductEntity):Observable<ProductEntity>{
    return this.http.post<ProductEntity>("http://localhost:8080/new-product",newProduct);
  }


}