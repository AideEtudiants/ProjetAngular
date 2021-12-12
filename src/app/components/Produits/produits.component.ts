import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductEntity } from '../../Entity/ProductEntity';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Cart } from 'src/app/Entity/cartEntity';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  productList : ProductEntity [];
  productFiltredList : ProductEntity [];     
  filter: boolean =false;    
  public totalItem : number ;
  public searchTerm !: string;

  productListSelect: boolean ;
  constructor(
      protected productService : ProductService,
      protected toastService : ToastrService,
      protected cartService : CartService,
      protected router: Router,
    ) {}

    ngOnInit(): void {
        this.getAllProducts();    
        this.totalProductInCart();    
    }
    totalProductInCart(){
      this.cartService.getProducts(4)
       .subscribe(res=>{    
         this.totalItem = res?.length;
         console.log(this.totalItem)
        })
    }
    public get getTotalItem(){
        return this.totalItem;
    }
    getAllProducts(){
        this.productService.getAllProducts()
        . subscribe ((data :ProductEntity [] )=>{
            this.productList = data;
            this.filter=false;
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
                this.getAllProducts();
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

    addtocart(produit : ProductEntity){
        // if(produit.quantity <= this.totalItem){
            let cart = new Cart(produit.id,produit.userCode);
            this.cartService.addtoCart(cart).subscribe(res=>{
                this.productListSelect =  res;
                this.totalProductInCart();
                
            });
        // }
        
    }

    findProductByCategory(idCategorie:number){
        this.productService.findProductByCategory(idCategorie)
        .subscribe({
            next :(data:ProductEntity[])=>{
                this.productFiltredList=data;
                this.filter= true;
            },
            error :()=>  this.toastService.error('Erreur')
        });
    }
    openCart(){
        this.router.navigate(['/cart']);
    }

}
