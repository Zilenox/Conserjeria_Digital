import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-residente',
    pathMatch: 'full'
  },
  {
    path: 'login-residente',
    loadChildren: () => import('./login-residente/login-residente.module').then( m => m.LoginResidentePageModule)
  },
  {
    path: 'login-conserje',
    loadChildren: () => import('./login-conserje/login-conserje.module').then( m => m.LoginConserjePageModule)
  },
  {
    path: 'login-administrador',
    loadChildren: () => import('./login-administrador/login-administrador.module').then( m => m.LoginAdministradorPageModule)
  },
  {
    path: 'casilla-residente',
    loadChildren: () => import('./casilla-residente/casilla-residente.module').then( m => m.CasillaResidentePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cambio-clave',
    loadChildren: () => import('./cambio-clave/cambio-clave.module').then( m => m.CambioClavePageModule)
  },
  {
    path: 'conserje-main',
    loadChildren: () => import('./conserje-main/conserje-main.module').then( m => m.ConserjeMainPageModule)
  },
  {
    path: 'administrador-main',
    loadChildren: () => import('./administrador-main/administrador-main.module').then( m => m.AdministradorMainPageModule)
  },
  {
    path: 'crear-usuario',
    loadChildren: () => import('./crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },
  {
    path: 'nueva-entrada',
    loadChildren: () => import('./nueva-entrada/nueva-entrada.module').then( m => m.NuevaEntradaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
