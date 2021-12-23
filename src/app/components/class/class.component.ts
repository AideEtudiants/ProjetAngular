import { Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RechercheService } from 'src/app/services/rechercheService.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from 'src/app/services/class/classService.service';
import { ClassEntity } from 'src/app/Entity/classEntity';
import { NewclasseComponent } from '../newclasse/newclasse.component';
import {ClassUser} from "../../Entity/ClassUser";
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class classComponent implements OnInit {
  classList : ClassEntity[];
  private map: L.Map;
  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;
  options: any=[];
  data:any=''
  newclasse:ClassEntity = new ClassEntity(null,4,"","","");
  constructor(protected classService : ClassService,
    private http: HttpClient,
    protected toastService : ToastrService,
    protected router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllclass();
      // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
  
  
    this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
      data.records.forEach(podotactile => {
        L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], {icon: myIcon}).addTo(this.map);
      });
    });
    
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
        console.log(this.newclasse);
        this.classService.addClass(this.newclasse).subscribe();
        this.getAllclass();
        this.router.navigate(['/cours']);
    }
 

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

  ParticiperCours(idUser:number,id :number){
    let classUser = new ClassUser(idUser,id);
    console.log(classUser)
    this.classService.addUserToClass(classUser)
      . subscribe ((data :ClassUser[] )=>{
        },
        (error:HttpErrorResponse)=>{
          alert(error.message)
          this.toastService.error('Erreur')
        }
      );

  }

}
