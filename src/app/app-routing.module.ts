import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path:'' , redirectTo:'/fligths' , pathMatch:'full'},
  {
    path:'fligths',
    loadChildren: () => import('./flights/fligths.module').then(h => h.FligthsModule)
  },
  {
    path:'airports',
    loadChildren: () => import('./airports/airports.module').then(h => h.AirportsModule)
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }