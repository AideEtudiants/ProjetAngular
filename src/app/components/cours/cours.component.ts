import { Component, OnInit, Inject} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CoursEntity } from '../../Entity/coursEntity';
import { RechercheService } from 'src/app/services/rechercheService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CoursService } from 'src/app/services/cours/coursService.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  coursList : CoursEntity[];

  constructor(protected CoursService : CoursService, protected toastService : ToastrService) { }

  ngOnInit(): void {
  }

  addCours(cours : CoursEntity){
    this.CoursService.addCours(cours)
    .subscribe({
        next :(data)=>{
            this.toastService.success('Le cours a ete ajouter')
        },
        error :()=>  this.toastService.error('Erreur lors de lajout')

    });
}

getAllCours(){
  this.CoursService.getAllCours()
  . subscribe ((data :CoursEntity [] )=>{
      this.coursList = data;
      },
  (error:HttpErrorResponse)=>{
      alert(error.message)
      this.toastService.error('Erreur')
      }
  );
}
ParticiperCours(){

}

}