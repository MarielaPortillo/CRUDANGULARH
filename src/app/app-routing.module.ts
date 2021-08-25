import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarusuarioComponent } from './editarusuario/editarusuario.component';
import { HomeComponent } from './home/home.component';

import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { MostrarunoComponent } from './mostraruno/mostraruno.component';
import{PrincipalComponent} from './principal/principal.component';

const routes: Routes = [

  {
    path:'',
    component:ListadousuariosComponent
  },
  {
    path:'create',
    component:PrincipalComponent
  }, 
  {
    path:'post/:variable',
    component:EditarusuarioComponent
  },
  {
    path:'mostraruno/:variable',
    component:MostrarunoComponent
  },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
