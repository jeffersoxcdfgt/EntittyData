import { NgModule } from '@angular/core';
import { flightsRoutedComponents , fligthsRoutingModule} from './fligths-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports:[
    CommonModule,
    fligthsRoutingModule,
    FormsModule,
    NgxPaginationModule,
    NgSelectModule
  ],
  declarations:[flightsRoutedComponents],
  providers: []
})
export class FligthsModule {

}