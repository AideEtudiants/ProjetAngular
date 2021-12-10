import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductEntity } from '../../Entity/ProductEntity';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { RechercheService } from 'src/app/services/rechercheService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
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
  productListSelect: boolean ;
  recherche:boolean=false;
  myControl = new FormControl();
  options: any=[];
  data:any='';
  elementTrouve:any=[];
  filteredOptions: Observable<string[]>;
  constructor(
      public productService : ProductService,
      public toastService : ToastrService,
      private cartService : CartService,
      private serviceRecherche : RechercheService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

    ngOnInit(): void {
        this.getAllProducts();
        this.cartService.getProducts(4)
       .subscribe(res=>{
         this.totalItem = res?.length;
         console.log(this.totalItem)
        });

        this.serviceRecherche.getAll().subscribe((data:ProductEntity[])=>{
        this.options= data.map(p=>p.name);
        console.log(this.options);
        });

        this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value)),
        );
        }

        private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
        }
        rechercher(){
        this.serviceRecherche.rechercheProduct(this.data).subscribe(
        (data:ProductEntity[])=>{
        this.elementTrouve= data;
        console.log(this.elementTrouve);
        this.gotoElementTrouve();
        this.recherche= true;
        }
        );

        }
        gotoElementTrouve() {
        this.router.navigate(['/produits']);
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
        let cart = new Cart(idProduct,idUser);
        console.log(cart)
        this.cartService.addtoCart(cart).subscribe(res=>{
            this.productListSelect =  res;
            console.log(this.productListSelect)
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
