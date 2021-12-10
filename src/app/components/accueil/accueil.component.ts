import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { RechercheService } from 'src/app/services/rechercheService.service';
import { ProductEntity } from 'src/app/Entity/ProductEntity';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  myControl = new FormControl();
  options: any=[];
  data:any='';
  elementTrouve:any=[];
 filteredOptions: Observable<string[]>;
 recherche:boolean = false;


   constructor(private serviceRecherche : RechercheService,private route: ActivatedRoute,private router: Router){}

   ngOnInit() {
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
  this.gotoElementTrouve();
   this.serviceRecherche.rechercheProduct(this.data).subscribe(
   (data:ProductEntity[])=>{
           this.elementTrouve= data;
           console.log(this.elementTrouve);
           this.recherche=true
         }
   );
 }
   gotoElementTrouve() {
     this.router.navigate(['/produits']);
   }

   openCart(){
     this.router.navigate(['/cart']);
   }

  changementDePage() {
    this.router.navigate(['produits']);
  }

}
