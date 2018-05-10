import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from '../attendance/dashboard/dashboard.component';
import { AdminComponent  }      from '../attendance/admin/admin.component';
import { ClassesComponent }  from '../attendance/classes/classes.component';
import { ClassComponent }  from '../attendance/class/class.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },  
  { path: 'admin', component: AdminComponent  },
  { path: 'classes', component: ClassesComponent  },
  { path: 'detail/:id', component: ClassComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class RoutingModule { }
