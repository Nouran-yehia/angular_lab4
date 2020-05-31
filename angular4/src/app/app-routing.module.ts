import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppTitleComponent } from './app-title/app-title.component';



const routes: Routes = [
  { path: 'todo/:title', component: AppTitleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
