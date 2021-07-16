import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'entidad',
    loadChildren: () => import('./domain/entidad/entidad.module').then(e => e.EntidadModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'empresa',
    loadChildren: () => import('./domain/empresa/empresa.module').then(e => e.EmpresaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario',
    loadChildren: () => import('./domain/usuario/usuario.module').then(u => u.UsuarioModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./domain/auth/login.module').then(l => l.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./domain/home/home.module').then(h => h.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./domain/home/home.module').then(h => h.HomeModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
