import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessComponent } from './bussiness/bussiness.component';
import { TechComponent } from './tech/tech.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {
    path:"",
    component:TopheadingComponent
  },
  {
    path:"techno",
    component:TechComponent
  },
  {
    path:"buss",
    component:BussinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
