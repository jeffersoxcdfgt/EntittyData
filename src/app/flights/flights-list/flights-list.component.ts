import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getAllFlights } from '../store/reducers/fligths.reducer';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  constructor(private store :Store<AppState>){ }

  ngOnInit(): void {
    this.store.select(getAllFlights).subscribe((books)=>{
      console.log("fligths",books)
    })
  }

}
