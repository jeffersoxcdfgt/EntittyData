import { NgModule } from '@angular/core';
import { loginRoutedComponents , loginRoutingModule} from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as loginReducers from './store/reducers/login.reducer';
import { LoginEffects } from './store/effects/login.effect';
import { LoginService } from './store/services/login.service';
import { TraceService } from '../shared/utils/traceService';

@NgModule({
  imports:[
    CommonModule,
    loginRoutingModule,
    FormsModule,
    NgxPaginationModule,
    NgSelectModule,
    StoreModule.forFeature('login',loginReducers.reducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  declarations:[loginRoutedComponents],
  providers: [
    LoginService,
    TraceService
  ]
})
export class LoginModule {

}