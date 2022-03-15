import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { PluralHttpUrlGenerator } from './shared/pluralgenerator';
import { EffectsModule } from '@ngrx/effects';
import { entityConfig } from './shared/entity/entity-metadata';
import  * as fligthsReducers from './flights/store/reducers/fligths.reducer';
import  * as airportsReducers from './airports/store/reducers/airports.reducer';
import  * as loginReducers from './login/store/reducers/login.reducer';
import { TraceService } from './shared/utils/traceService';

export const reducers: ActionReducerMap<any> = {
  fligths:fligthsReducers.reducer,
  airports:airportsReducers.reducer,
  login:loginReducers.reducer
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
     HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator },
    TraceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
