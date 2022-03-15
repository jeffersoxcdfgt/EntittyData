import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUser } from '../../login/store/actions/login.actions';
import { AppState } from '../../app.state';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private store :Store<AppState>) { }

  ngOnInit(): void {
  }

  logIn(): void{
    this.store.dispatch(loginUser( {
      user:{
        authenticity_token:'',
        login:{
            email:'admin',
            password:'Cx94541178$*'
        }
      }
    }));
  }

}
