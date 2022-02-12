import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectUsersList } from '../user/store/actions/user.actions';
import { selectBooksList } from './store/actions/book.actions';

@Component({
  selector: 'app-book',
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private store :Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(selectBooksList());
    this.store.dispatch(selectUsersList());
  }

}
