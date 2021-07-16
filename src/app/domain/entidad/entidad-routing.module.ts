import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadListComponent } from './entidad-list/entidad-list.component';
import { EntidadEditComponent } from './entidad-edit/entidad-edit.component';



const routes: Routes = [
  { path: '', component: EntidadListComponent },
  { path: 'nuevo', component: EntidadEditComponent },
  { path: ':codigo', component: EntidadEditComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadRoutingModule { }
