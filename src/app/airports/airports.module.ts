import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { airportsRoutedComponents , airportsRoutingModule} from './airports-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryApi } from '../app.in-memory.api';
import { StoreModule } from '@ngrx/store';
import * as airportsReducers from './store/reducers/airports.reducer';
import { AirportsEffects } from './store/effects/airports.effect';
import { AirportsService } from './store/services/airports.service';
import { TraceService } from '../shared/utils/traceService';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports:[
    CommonModule,
    airportsRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(AppInMemoryApi),
    StoreModule.forFeature('airports',airportsReducers.reducer),
    EffectsModule.forFeature([AirportsEffects]),
  ],
  declarations:[airportsRoutedComponents],
  providers: [
    AirportsService,
    TraceService,
  ]
})
export class AirportsModule {
}

