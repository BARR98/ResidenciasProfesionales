import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastersListComponent } from './components/masters-list/masters-list.component';
import { CreateComponentComponent } from './components/create-component/create-component.component';
import { AdminHomeComponentComponent } from './components/admin-home-component/admin-home-component.component';
import { EditMasterComponent } from './components/edit-master/edit-master.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'home',
    component: AdminHomeComponentComponent
  },
  {
    path:'create',
    component:CreateComponentComponent
  },  
  {
    path: 'masters-list',
    component:MastersListComponent
  },
  {
    path: 'master-edit/:id',
    component:EditMasterComponent
  },
  {
    path: 'users',
    component:UserComponent
  },
  {
    path: '',
    component:MastersListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
