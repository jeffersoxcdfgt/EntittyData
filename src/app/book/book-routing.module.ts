import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//components
import { BookComponent } from './book.component';
import { BookListComponent } from './book-list/book-list.component';

const bookRoutes : Routes  =  <Routes>[{
  path:'',
  component :BookComponent,
  children:[
    { path:'' , component:  BookListComponent }
  ]
}];

@NgModule({
  imports:[
    RouterModule.forChild(bookRoutes)
  ],
  exports:[RouterModule]
})
export class bookRoutingModule {
}

export const bookRoutedComponents = [
   BookComponent,
   BookListComponent
]