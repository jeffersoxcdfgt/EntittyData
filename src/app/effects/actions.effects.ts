import { Injectable } from "@angular/core";
import { Actions, createEffect} from "@ngrx/effects";
import {
  ofEntityType,
  ofEntityOp,
  EntityOp,
  EntityAction
} from "@ngrx/data";
import { tap } from "rxjs/operators";


@Injectable()
export class ActionsEntityEffects {

  // Action get for data
   ngrxDataEffect$ = createEffect(() =>
      this.actions$.pipe(
      ofEntityType('Hero'),
        ofEntityOp(EntityOp.ADD_ONE),
          tap((_) => console.log('Calling effect per Entity Actions'))
      ),
      { dispatch: false }
  )

  constructor(private actions$: Actions<EntityAction>) { }

}