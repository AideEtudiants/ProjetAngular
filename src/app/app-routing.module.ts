import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './ProductPage/product-page.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: "produits", component: ProductsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

    
}
