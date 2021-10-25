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

export const reducers: ActionReducerMap<any> = {
  user:userReducers.reducer,
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AppInMemoryApi),
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    EntityDataModule.forRoot(entityConfig),
    BrowserModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator },
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
