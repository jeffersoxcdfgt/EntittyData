import { NgModule } from '@angular/core';
import { airportsRoutedComponents , airportsRoutingModule} from './airports-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[
    airportsRoutingModule,
    FormsModule,
  ],
  declarations:[airportsRoutedComponents],
  providers: []
})
export class AirportsModule {

}