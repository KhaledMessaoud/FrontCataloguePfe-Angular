import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-addpfe',
  templateUrl: './addpfe.component.html',
  styleUrls: ['./addpfe.component.css']
})
export class AddpfeComponent implements OnInit {
  pfe :any={"titre" : "", "cat" : {"id" : ""} } ;
  categorie : any ;
  titre: string = "";
  total: any;

  constructor(private gest: GestionService , private route : Router) { }

  ngOnInit(): void {
    this.getCat();
  }

  getCat() {
    this.gest.getCategorie().subscribe({
      next: (data: any) => { this.categorie = data;},
      error: (err: any) => { },
      complete: () => { }
    })
  }

  Add(){
    this.gest.Add(this.pfe).subscribe({
      next:(data:any)=>{this.route.navigate(['pfe'])},
      error:(err:any)=> {},
      complete:()=>{}
       }
    )
  }

  getPfeTitre() {
    if (this.titre.length == 0) {
      this.getPfe();
    } if (this.titre.length > 0) {
      this.gest.getPfeByTitre(this.titre).subscribe({
        next: (data: any) => { this.pfe = data},
        error: (err: any) => { },
        complete: () => { }
      })
    }
  }

  getPfe() {
    this.gest.getPfes().subscribe({
      next: (data: any) => {
        this.pfe = data;
        console.log(data)
        this.total = data.length;
        this.route.navigate(['pfe'])
      },
      error: (err: any) => { },
      complete: () => { }
    })
  }

  getPfeCategorie(id: number) {
    this.gest.getPfeByCategorie(id).subscribe({
      next: (data: any) => { this.pfe = data;
        this.route.navigate(['pfe'])},
      error: (err: any) => { },
      complete: () => { }
    })
  }
}
