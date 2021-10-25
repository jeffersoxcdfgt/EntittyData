import { Component , OnInit} from '@angular/core';
import { EntityState } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { User } from './model/user';
import { loadUsers, selectUsersList } from './store/actions/user.actions';


@Component({
  selector:'app-user',
  template:`<router-outlet></router-outlet>`,
  styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private store :Store<AppState>){
  }

  ngOnInit(): void{
    this.store.dispatch(selectUsersList());
  }
}