import { Component, OnInit, Inject} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RechercheService } from 'src/app/services/rechercheService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { classService } from 'src/app/services/class/classService.service';
import { ToastrService } from 'ngx-toastr';
import { classEntity } from 'src/app/Entity/classEntity';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class classComponent implements OnInit {
  classList : classEntity[];

  constructor(protected classService : classService, protected toastService : ToastrService) { }

  ngOnInit(): void {
  }

  addclass(classe:classEntity){
    this.classService.addClass(classe)
    .subscribe({
        next :(data)=>{
            this.toastService.success('Le class a ete ajouter')
        },
        error :()=>  this.toastService.error('Erreur lors de lajout')

    });
}

getAllclass(){
  this.classService.getAllClass()
  . subscribe ((data :classEntity [] )=>{
      this.classList = data;
      },
  (error:HttpErrorResponse)=>{
      alert(error.message)
      this.toastService.error('Erreur')
      }
  );
}

ParticiperCours(){}

}