import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegularVerbsComponent } from './pages/regular-verbs/regular-verbs.component';
import { IrregularVerbsComponent } from './pages/irregular-verbs/irregular-verbs.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { PrincipalComponent } from './component/principal/principal.component';

const routes: Routes = [
  {
    path: 'ReguarVerbs',
    component: RegularVerbsComponent
  },
  {
    path: 'IrregularVerbs',
    component: IrregularVerbsComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Registro',
    component: RegistroComponent
  },
  {
    path: 'Principal',
    component: PrincipalComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'Login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
