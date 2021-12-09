
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductEntity } from 'src/app/Entity/ProductEntity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {  }
  getAllProducts() : Observable<ProductEntity[]>{
    return this.http.get<ProductEntity[]>("http://localhost:8080/product/all");
  }
  getProductById(idProduct: number):Observable<ProductEntity>{
    return this.http.get<ProductEntity>(`http://localhost:8080/product/${idProduct}`);
  }
  updatProcut(productToUpdate:number):Observable<ProductEntity>{
    return this.http.post<ProductEntity>("http://localhost:8080/product",productToUpdate);
  }
  RemoveProduct(idProduct:number):Observable<void>{
    return this.http.delete<void>(`http://localhost:8080/product/delete/${idProduct}`);
  }
  addProduct(newProduct:ProductEntity):Observable<ProductEntity>{
    return this.http.post<ProductEntity>("http://localhost:8080/product",newProduct);
  }

  findProductByCategory(idCategorie:number) : Observable<ProductEntity[]>{
    return this.http.post<ProductEntity[]>("http://localhost:8080/product/searchByCategory",idCategorie);
  }


}