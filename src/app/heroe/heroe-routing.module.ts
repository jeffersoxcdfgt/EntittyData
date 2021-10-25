import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//components
import { HeroeComponent } from './heroe.component';
import { HeroeListComponent } from './heroe-list/heroe-list.component';


const heroeRoutes : Routes  =  <Routes>[{
  path:'',
  component :HeroeComponent,
  children:[
    { path:'' , component:  HeroeListComponent }
  ]
}];

@NgModule({
  imports:[
    RouterModule.forChild(heroeRoutes)
  ],
  exports:[RouterModule]
})
export class HeroeRoutingModule {
}

export const heroeRoutedComponents = [
    HeroeComponent,
    HeroeListComponent
]