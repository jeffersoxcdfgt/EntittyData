import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { DataFlights, Flights } from '../class/flights';
import { BecomeDataFligths, BecomeFligths, cleanFligths } from '../shared/utils/functions';
import { getAllFlights } from '../store/reducers/fligths.reducer';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  p: number = 1;
  infoshow: Observable<DataFlights[]> = new Observable<DataFlights[]>();


  selectedAirport: number = 0;
  airports = [
      { airport_id: 1, airport_name: 'airport 1' },
      { airport_id: 2, airport_name: 'airport 2' },
      { airport_id: 3, airport_name: 'airport 3' },
      { airport_id: 4, airport_name: 'airport 4' },
  ];

  constructor(private store :Store<AppState>){ }

  ngOnInit(): void {
    this.infoshow = this.store.select(getAllFlights).pipe(cleanFligths,BecomeFligths,BecomeDataFligths)
  }

  selectAirport(airport: any){
    if(!!airport){
      console.log(airport,"111")
    }
  }

  clearAirport(): void{
    console.log("clear")
  }

}
