import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { airportsGetAll } from '../airports/store/actions/airports.actions';
import { AppState } from '../app.state';
import { fligthsGetAll } from './store/actions/fligths.actions';


@Component({
  selector: 'app-flights',
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor(private store :Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(airportsGetAll());
    this.store.dispatch(fligthsGetAll());
  }

}
