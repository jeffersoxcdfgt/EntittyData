import { Component , OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { EntityActionFactory, EntityActionPayload, EntityCache, EntityCollection, EntityCollectionService, EntityOp, EntityServices } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Update} from '@ngrx/entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'entity-data';
  heroesService: EntityCollectionService<Hero>;
  loading$: Observable<boolean>;
  heroes$: Observable<Hero[]>;
  store:any;

  constructor(entityServices: EntityServices,
          store:Store<EntityCollection>
    ) {
    this.heroesService = entityServices.getEntityCollectionService('Hero');
    this.heroes$ = this.heroesService.entities$;
    this.loading$ =  this.heroesService.loading$;
    this.store = store  
    this.getChanges()
  }
 
  ngOnInit() {   
    this.getHeroes()

  }

  add(): void{
   const hero: Hero ={id: 4, name: 'gggg',saying: 'fgfgf',dateLoaded: '2012-05-05'};
   const payload: EntityActionPayload = {
     entityName: 'Hero',
     entityOp: EntityOp.ADD_ONE,
     data: hero,
     //mergeStrategy: MergeStrategy.IgnoreChanges,
     // .. other options ..
   };
   const Addaction = new EntityActionFactory().create(payload)
   this.store.dispatch(Addaction);
  }

  update(): void {
    const hero: Hero = {id: 2, name: 'Manuela',saying: 'Hellos',dateLoaded: '1111-11-11'}
    const Updateaction = new EntityActionFactory().create<Update<Hero>>(      
      'Hero',
      EntityOp.UPDATE_ONE,
       { 
          id:2,
          changes: hero
      }
     );
      this.store.dispatch(Updateaction);
  }

  delete(): void {
    const Deleteaction = new EntityActionFactory().create<number>(      
      'Hero',
      EntityOp.REMOVE_ONE,
      2,
    );
    this.store.dispatch(Deleteaction);
  }

  getHeroes (): void{
    const Queryaction = new EntityActionFactory().create<Hero>(
      'Hero',
      EntityOp.QUERY_ALL,
    );
    this.store.dispatch(Queryaction);
  }



  getById = () =>{
    /*const hero = { id: 1 } as Hero;
    const QueryByIdaction = new EntityActionFactory().create<Hero>(      
      'Hero',
      EntityOp.QUERY_BY_KEY_SUCCESS,
      hero,
    );
    this.store.dispatch(QueryByIdaction);   */ 
  }

  getChanges = () =>{
    this.heroes$.subscribe((data)=>{
      console.log(data)
    })
  }
}
