import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { BecomeAirports, BecomeDataAirport, cleanAiports } from 'src/app/flights/shared/utils/functions';
import { Airport, DataAirport } from '../class/airport';
import { getAllAirports } from '../store/reducers/airports.reducer';

@Component({
  selector: 'app-airports-list',
  templateUrl: './airports-list.component.html',
  styleUrls: ['./airports-list.component.css']
})
export class AirportsListComponent implements OnInit {

  constructor(private store :Store<AppState>) { }

  ngOnInit(): void {

    this.store.select(getAllAirports).pipe(cleanAiports,BecomeAirports,BecomeDataAirport).subscribe((val:DataAirport[])=>{ })
  }

}
