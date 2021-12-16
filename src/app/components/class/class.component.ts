import { Component, OnInit, Inject} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RechercheService } from 'src/app/services/rechercheService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from 'src/app/services/class/classService.service';
import { ClassEntity } from 'src/app/Entity/ClassEntity';



@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class classComponent implements OnInit {
  classList : ClassEntity[];

  constructor(protected classService :ClassService, protected toastService : ToastrService) { }

  ngOnInit(): void {
    this.getAllclass();
  }

  addclass(classe:ClassEntity){
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
  . subscribe ((data :ClassEntity [] )=>{
      this.classList = data;
      console.log(this.classList )
      },
  (error:HttpErrorResponse)=>{
      alert(error.message)
      this.toastService.error('Erreur')
      }
  );
}

ParticiperCours(){}

}