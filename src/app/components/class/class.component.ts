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
import { NewclasseComponent } from '../newclasse/newclasse.component';



@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class classComponent implements OnInit {
  classList : ClassEntity[];
  newclasse:ClassEntity;

  constructor(protected classService : ClassService,
    protected toastService : ToastrService,
    protected router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

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

AjoutClass(){
  const dialogRef = this.dialog.open(NewclasseComponent, {
  width: '800px',
    data: {},
  });
  dialogRef.afterClosed().subscribe(result => {

    if(result!=null){
        this.newclasse = result;
        this.classService.addClass(this.newclasse).subscribe();
        this.getAllclass();
        this.router.navigate(['/cours']);
    }
  console.log(this.newclasse);
  
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