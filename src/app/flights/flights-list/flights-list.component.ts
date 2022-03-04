import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Flights } from '../class/flights';
import { BecomeFligths, cleanFligths } from '../shared/utils/functions';
import { getAllFlights } from '../store/reducers/fligths.reducer';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  constructor(private store :Store<AppState>){ }

  ngOnInit(): void {
    this.store.select(getAllFlights).pipe(cleanFligths,BecomeFligths).subscribe((flights: Flights)=>{
      console.log("fligths",flights.data)
    })
  }

}
