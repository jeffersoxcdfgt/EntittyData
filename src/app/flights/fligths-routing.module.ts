import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//components
import { FlightsComponent } from './flights.component';
import { FlightsListComponent } from './flights-list/flights-list.component';

const fligthsRoutes : Routes  =  <Routes>[{
  path:'',
  component :FlightsComponent,
  children:[
    { path:'' , component:  FlightsListComponent }
  ]
}];

@NgModule({
  imports:[
    RouterModule.forChild(fligthsRoutes)
  ],
  exports:[RouterModule]
})
export class fligthsRoutingModule {
}

export const flightsRoutedComponents = [
    FlightsComponent,
    FlightsListComponent
]