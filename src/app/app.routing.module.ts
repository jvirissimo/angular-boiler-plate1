import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UiComponent } from './ui/ui.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'ui', component: UiComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'content', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }