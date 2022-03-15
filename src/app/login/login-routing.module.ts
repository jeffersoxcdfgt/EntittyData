import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//components
import { LoginComponent } from './login.component';
import { UserLoginComponent } from './user-login/user-login.component';

const loginRoutes : Routes  =  <Routes>[{
  path:'',
  component :LoginComponent,
  children:[
    { path:'' , component:  UserLoginComponent }
  ]
}];

@NgModule({
  imports:[
    RouterModule.forChild(loginRoutes)
  ],
  exports:[RouterModule]
})
export class loginRoutingModule {
}

export const loginRoutedComponents = [
    LoginComponent,
    UserLoginComponent
]