import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: 'widgets', component: WidgetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }