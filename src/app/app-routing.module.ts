import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path:'' , redirectTo:'/user' , pathMatch:'full'},
  {
    path:'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'heroe',
    loadChildren: () => import('./heroe/heroe.module').then(h => h.HeroeModule)
  },
  {
    path:'book',
    loadChildren: () => import('./book/book.module').then(h => h.BookModule)
  },
  {
    path:'fligths',
    loadChildren: () => import('./flights/fligths.module').then(h => h.FligthsModule)
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }