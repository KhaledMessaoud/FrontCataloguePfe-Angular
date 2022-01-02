import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-listepfe',
  templateUrl: './listepfe.component.html',
  styleUrls: ['./listepfe.component.css']
})
export class ListepfeComponent implements OnInit {
  pfe: any;
  categorie: any;
  titre: string = "";
  total: any;
  constructor(private gest: GestionService) { }

  ngOnInit(): void {
    this.getPfe();
    this.getCat();
  }

  getPfe() {
    this.gest.getPfes().subscribe({
      next: (data: any) => {
        this.pfe = data;
        console.log(data)
        this.total = data.length;
      },
      error: (err: any) => { },
      complete: () => { }
    })
  }

  getCat() {
    this.gest.getCategorie().subscribe({
      next: (data: any) => { this.categorie = data;},
      error: (err: any) => { },
      complete: () => { }
    })
  }

  getPfeCategorie(id: number) {
    this.gest.getPfeByCategorie(id).subscribe({
      next: (data: any) => { this.pfe = data;},
      error: (err: any) => { },
      complete: () => { }
    })
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

  delete(id : number){
    this.gest.Delete(id).subscribe({
      next :(data: any)=> { this.getPfe();},
      error:(err:any)=>{},
      complete:()=>{}
    })
  }
}
