import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Product } from '../interfaces/productInterface';
import { RechercheService } from '../services/rechercheService.service';

 @Component({
  selector: 'app-barre-de-recherche',
  templateUrl: './barre-de-recherche.component.html',
  styleUrls: ['./barre-de-recherche.component.css']
})
export class BarreDeRechercheComponent implements OnInit {
  myControl = new FormControl();
 // options: string[] = ['element1', 'livre2','offre3'];
   options: string[] ;
  filteredOptions: Observable<string[]>;


    constructor(private serviceRecherche : RechercheService){}
  
    ngOnInit() {
      this.serviceRecherche.getAll().subscribe((data: Product["NAME"][])=>{
        this.options = data;
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
}




