import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductEntity } from '../Entity/ProductEntity';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  productList : ProductEntity []
  constructor(
      public productService : ProductService,
      public toastService : ToastrService
  ) { }

    ngOnInit(): void {
        this.getAllProducts();
    }
    getAllProducts(){
        this.productService.getAllProducts()
        . subscribe ((data :ProductEntity [] )=>{
            this.productList = data;
            },
        (error:HttpErrorResponse)=>{
            alert(error.message)
            this.toastService.error('Erreur')
            }
        );
    }
    deleteProduct(idProduct : number){
        this.productService.RemoveProduct(idProduct)
        .subscribe({
            next :(data)=>{
                this.toastService.success('Le produit est bien été supprimé')
            },
            error :()=>  this.toastService.error('Erreur lors de la suppression')

        });

    }
    addProduct(product : ProductEntity){
        this.productService.addProduct(product)
        .subscribe({
            next :(data)=>{
                this.toastService.success('Le produit est bien été ajouté')
            },
            error :()=>  this.toastService.error('Erreur lors de lajout')

        });

    }




}
