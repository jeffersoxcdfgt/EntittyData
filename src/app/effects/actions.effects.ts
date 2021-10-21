import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import {
  ofEntityType,
  ofEntityOp,
  EntityOp,
  EntityAction,
  EntityActionPayload
} from "@ngrx/data";
import { tap } from "rxjs/operators";
import { Hero } from '../models/hero';

@Injectable()
export class ActionsEntityEffects {

  // Action get for data
   ngrxDataEffect$ = createEffect(() =>
      this.actions$.pipe(
      ofEntityType('Hero'),
        ofEntityOp(EntityOp.ADD_ONE),
          tap((data: EntityAction) =>{
            const paylod:EntityActionPayload = data.payload
            console.log('Calling effect per Entity Actions')
          })
      ),
      { dispatch: false }
  )

  // Action get for data
  ngrxCustomDataEffect$ = createEffect(() =>
    this.actions$.pipe(
     ofType('[Hero] ngrx/data/custom-action'),
        tap((data:EntityAction) => console.log('Calling effect for Custom Actions ',data.payload))
    ),
    { dispatch: false }
)

  constructor(private actions$: Actions<EntityAction>) { }

}