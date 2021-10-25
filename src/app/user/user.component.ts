import { Component , OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectUsersList } from './store/actions/user.actions';


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