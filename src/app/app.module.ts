import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryApi } from './app.in-memory.api';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { PluralHttpUrlGenerator } from './shared/pluralgenerator';
import { EffectsModule } from '@ngrx/effects';
import { entityConfig } from './shared/entity/entity-metadata';
import  * as userReducers from './user/store/reducers/user.reducer';
import { UserEffects } from './user/store/effects/user.effect';
import { UserService } from './user/store/services/user.service';
import  * as bookReducers from './book/store/reducers/book.reducer';
import { BookEffects } from './book/store/effects/book.effect';
import { BookService } from './book/store/services/book.service';
import  * as fligthsReducers from './flights/store/reducers/fligths.reducer';
import { FligthskEffects } from './flights/store/effects/fligths.effect';
import { FligthsService } from './flights/store/services/fligths.service';
import  * as airportsReducers from './airports/store/reducers/airports.reducer';
import { AirportsEffects } from './airports/store/effects/airports.effect';
import { AirportsService } from './airports/store/services/airports.service';

import { TraceService } from './shared/utils/traceService';

export const reducers: ActionReducerMap<any> = {
  user:userReducers.reducer,
  book:bookReducers.reducer,
  fligths:fligthsReducers.reducer,
  airports:airportsReducers.reducer
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AppInMemoryApi),
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects,BookEffects,FligthskEffects,AirportsEffects]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator },
    UserService,
    BookService,
    FligthsService,
    AirportsService,
    TraceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
