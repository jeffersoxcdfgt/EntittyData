import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//components
import { AirportsComponent } from './airports.component';
import { AirportsListComponent } from './airports-list/airports-list.component';

const airportsRoutes : Routes  =  <Routes>[{
  path:'',
  component :AirportsComponent,
  children:[
    { path:'' , component:  AirportsListComponent }
  ]
}];

@NgModule({
  imports:[
    RouterModule.forChild(airportsRoutes)
  ],
  exports:[RouterModule]
})
export class airportsRoutingModule {
}

export const airportsRoutedComponents = [
    AirportsComponent,
    AirportsListComponent
]