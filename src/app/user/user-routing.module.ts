import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//components
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';

const userRoutes : Routes  =  <Routes>[{
  path:'',
  component :UserComponent,
  children:[
    { path:'' , component:  UserListComponent }
  ]
}];

@NgModule({
  imports:[
    RouterModule.forChild(userRoutes)
  ],
  exports:[RouterModule]
})
export class userRoutingModule {
}

export const userRoutedComponents = [
  UserComponent,
  UserListComponent
]