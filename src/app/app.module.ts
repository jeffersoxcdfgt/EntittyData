import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryApi } from './app.in-memory.api';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule, HttpUrlGenerator, Pluralizer, PLURAL_NAMES_TOKEN } from '@ngrx/data';
import { entityConfig } from './entity/entity-metadata';
import { AppComponent } from './app.component';
import { PluralHttpUrlGenerator } from './pluralnames/pluralgenerator';
import { ActionsEntityEffects } from './effects/actions.effects';


/*const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/api',
  timeout: 3000, // request timeout
}*/


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
     HttpClientInMemoryWebApiModule.forRoot(AppInMemoryApi),
     StoreModule.forRoot({}),
     EffectsModule.forRoot([ActionsEntityEffects]),
     EntityDataModule.forRoot(entityConfig),
    BrowserModule
  ],
  providers: [   
    //{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
    { provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
