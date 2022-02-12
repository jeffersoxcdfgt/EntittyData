import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { selectBooksAndUsers, selectedListBooks } from '../store/reducers/book.reducer';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private store :Store<AppState>){ }

  ngOnInit(): void {

    this.store.select(selectedListBooks).subscribe((books)=>{
      console.log("my  books",books)
    })


    this.store.select(selectBooksAndUsers).subscribe((usersAndbooks)=>{
        console.log("my users and books",usersAndbooks)
    })
  }

}
