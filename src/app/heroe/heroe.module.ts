import { NgModule  } from '@angular/core';
import { heroeRoutedComponents , HeroeRoutingModule} from './heroe-routing.module';

@NgModule({
  imports:[
    HeroeRoutingModule,
  ],
  declarations:[heroeRoutedComponents],
  providers:[]
})
export class HeroeModule {

}