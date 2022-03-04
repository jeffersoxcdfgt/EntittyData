import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataAirport } from 'src/app/airports/class/airport';
import { getAllAirports } from 'src/app/airports/store/reducers/airports.reducer';
import { AppState } from 'src/app/app.state';
import { DataFlights, Flights} from '../class/flights';
import { BecomeAirports,
          BecomeDataAirport,
          BecomeDataFligths,
          BecomeFligths,
          cleanAiports,
          cleanFligths, 
          filterForAirport,
          filterForIATA} from '../shared/utils/functions';
import { getAllFlights } from '../store/reducers/fligths.reducer';

interface SearchData {
  items: any[];
  term: string;
}

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  p: number = 1;
  infoshow: Observable<DataFlights[]> = new Observable<DataFlights[]>();
  selectedAirport: number = 0;
  airports: any = []
  iatcode: string = ''

  constructor(private store :Store<AppState>){ }

  ngOnInit(): void {
    this.infoshow = this.store.select(getAllFlights).pipe(cleanFligths,BecomeFligths,BecomeDataFligths)
    this.store.select(getAllAirports)
          .pipe(cleanAiports,
              BecomeAirports,BecomeDataAirport).subscribe((listairports:DataAirport[])=> this.airports = listairports)

  }

  selectAirport(airport: DataAirport){
    if(!!airport){
       this.infoshow  = this.store.select(getAllFlights).pipe(cleanFligths,BecomeFligths,filterForAirport(airport))
    }
  }

  searchIATA(IATAcode: SearchData):void{
    //console.log(IATAcode.term,"hhhh")
    this.infoshow  = this.store.select(getAllFlights).pipe(cleanFligths,BecomeFligths,filterForIATA(IATAcode.term))
  }

  clearAirport(): void{
    this.infoshow = this.store.select(getAllFlights).pipe(cleanFligths,BecomeFligths,BecomeDataFligths)
  }

}
