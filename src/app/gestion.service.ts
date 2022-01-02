import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http: HttpClient) { }

  getPfes() {
    return this.http.get("http://localhost:8080/pfes");
  }

  getCategorie() {
    return this.http.get("http://localhost:8080/categories");
  }

  getPfeByCategorie(id: number) {
    return this.http.get("http://localhost:8080/pfebycat/" + id);
  }

  getPfeByTitre(titre: string) {
    return this.http.get("http://localhost:8080/pfebytitre/" + titre);
  }

  Add(pfe: any) {
    return this.http.post("http://localhost:8080/add", pfe);
  }

  Delete(id: number) {
    return this.http.delete("http://localhost:8080/delete/" + id);
  }
}
