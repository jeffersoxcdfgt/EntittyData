import { NgModule } from '@angular/core';
import { bookRoutedComponents , bookRoutingModule} from './book-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[
    bookRoutingModule,
    FormsModule,
  ],
  declarations:[bookRoutedComponents],
  providers: []
})
export class BookModule {

}