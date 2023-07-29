import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './image/details/details.component';
import { ListComponent } from './image/list/list.component';
import { NewComponent } from './image/new/new.component';

const routes: Routes = [
  {path:'', component: ListComponent},
  {path:'new', component: NewComponent},
  {path:'details', component: DetailsComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
