import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { RechercheService } from 'src/app/services/search/rechercheService.service';
import { ProductEntity } from '../../Entity/ProductEntity';

 @Component({
  selector: 'app-barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.css']
})
export class BarreDeRechercheComponent implements OnInit {
   myControl = new FormControl();
   options: any=[];
   data:any='';
   filteredOptions: Observable<string[]>;


    constructor(private serviceRecherche : RechercheService,private router: Router){}

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
    this.serviceRecherche.rechercheProduct(this.data).subscribe();
    console.log(this.data)
  }
  openCart(){
    this.router.navigate(['/cart']);
  }
}




