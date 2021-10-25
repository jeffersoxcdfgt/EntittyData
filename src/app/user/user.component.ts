import { Component , OnInit} from '@angular/core';
import { EntityActionFactory, EntityCollection, EntityOp } from '@ngrx/data';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Hero } from '../heroe/model/hero';
import { selectUsersList } from './store/actions/user.actions';


@Component({
  selector:'app-user',
  template:`<router-outlet></router-outlet>`,
  styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit {

  storeEntityCol:any;

  constructor(private store :Store<AppState>,
              storeEntityCol:Store<EntityCollection>){
   this.storeEntityCol = storeEntityCol
  }

  ngOnInit(): void{

    const allqueryheroes = new EntityActionFactory().create<Hero>(
      'Hero',
      EntityOp.QUERY_ALL,
    );
    this.storeEntityCol.dispatch(allqueryheroes);
    this.store.dispatch(selectUsersList());
  }
}