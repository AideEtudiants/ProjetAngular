import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { 
      productService :ProductService
  }

  ngOnInit(): void {
      
  }
//   getAllProduct(){
//       this.productService.

//   }
}