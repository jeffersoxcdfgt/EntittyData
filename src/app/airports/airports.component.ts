import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { airportsGetAll } from './store/actions/airports.actions';

@Component({
  selector: 'app-airports',
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {

  constructor(private store :Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(airportsGetAll());
  }

}
