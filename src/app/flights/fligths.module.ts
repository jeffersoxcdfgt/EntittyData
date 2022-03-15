import { NgModule } from '@angular/core';
import { flightsRoutedComponents , fligthsRoutingModule} from './fligths-routing.module';
import {  StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import  {NgxPaginationModule} from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryApi } from '../app.in-memory.api';
import { EffectsModule } from '@ngrx/effects';
import * as fligthsReducers from './store/reducers/fligths.reducer';
import { FligthskEffects } from './store/effects/fligths.effect';
import { FligthsService } from './store/services/fligths.service';
import * as airportsReducers from '../airports/store/reducers/airports.reducer';
import { AirportsEffects } from '../airports//store/effects/airports.effect';
import { AirportsService } from '../airports//store/services/airports.service';
import { TraceService } from '../shared/utils/traceService';

@NgModule({
  imports:[
    CommonModule,
    fligthsRoutingModule,
    FormsModule,
    NgxPaginationModule,
    NgSelectModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(AppInMemoryApi),
    StoreModule.forFeature('reducers',{
      'fligths':fligthsReducers.reducer,
      'airports':airportsReducers.reducer
    }),
    EffectsModule.forFeature([FligthskEffects,AirportsEffects]),
  ],
  declarations:[flightsRoutedComponents],
  providers: [
    AirportsService,
    FligthsService,
    TraceService,
  ]
})
export class FligthsModule {

}