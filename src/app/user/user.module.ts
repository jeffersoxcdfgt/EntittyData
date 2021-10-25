import { NgModule } from '@angular/core';
import { userRoutedComponents , userRoutingModule} from './user-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[
    userRoutingModule,
    FormsModule,
  ],
  declarations:[userRoutedComponents],
  providers: []
})
export class UserModule {

}