import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductEntity } from '../../Entity/ProductEntity';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Cart } from 'src/app/Entity/cartEntity';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  productList : ProductEntity [];
  productFiltredList : ProductEntity [];     
  filter: boolean =false;

  productListSelect: Cart ;
  constructor(
      public productService : ProductService,
      public toastService : ToastrService,
      private cartService : CartService
  ) { }

    ngOnInit(): void {
        this.getAllProducts();
        this.cartService.getProducts(4)
       .subscribe(res=>{
        this.totalItem = res.length;
        })
    }
    
  public totalItem : number = 0;
  public searchTerm !: string;

  search(event:any){
    // this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    // this.cartService.search.next(this.searchTerm);
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
    addtocart(idProduct : number, idUser: number){
        this.cartService.addtoCart(idProduct,idUser).subscribe(res=>{
            this.productListSelect =  res;
         });
      }
    // filter(category:string){
    //     this.filterCategory = this.productList
    //     .filter((a:any)=>{
    //       if(a.category == category || category==''){
    //         return a;
    //       }
    //     })
    //   }

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

    // getproductList():ProductEntity[]{
    //     return this.filter ? this.productFiltredList : this.productList ;
    // }




}
