import { NgModule } from '@angular/core';
import { flightsRoutedComponents , fligthsRoutingModule} from './fligths-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[
    fligthsRoutingModule,
    FormsModule,
  ],
  declarations:[flightsRoutedComponents],
  providers: []
})
export class FligthsModule {

}