import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './cicloVidaComponent-voidMemoryLeak/first/first.component';
import { UsersComponent } from './templatesOutlet-viewChild-contentChild/users/users.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'first', component: FirstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
