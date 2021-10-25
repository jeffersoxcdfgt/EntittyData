import { Component, OnInit } from '@angular/core';
import { EntityState } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from '../model/user';
import { selectAllUsers } from '../store/reducers/user.reducer';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //users : Observable<User[]>;

  constructor(private store :Store<AppState>){
  }

  ngOnInit(): void{
    this.store.select(selectAllUsers).subscribe((data:User[])=>{
          console.log(data)
    })
  }
}
