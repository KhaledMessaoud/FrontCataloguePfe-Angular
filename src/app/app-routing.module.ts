import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpfeComponent } from './addpfe/addpfe.component';
import { ListepfeComponent } from './listepfe/listepfe.component';

const routes: Routes = [
  {path : "", component : ListepfeComponent},
  {path : "pfe", component : ListepfeComponent},
  {path : "add", component : AddpfeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
