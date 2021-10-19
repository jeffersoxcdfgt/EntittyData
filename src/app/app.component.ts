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
  storeCache:any;


  constructor(entityServices: EntityServices,
          storeCache: Store<EntityCache>,
          store:Store<EntityCollection>
    ) {
    this.heroesService = entityServices.getEntityCollectionService('Hero');
    this.heroes$ = this.heroesService.entities$;
    this.loading$ =  this.heroesService.loading$;
    this.store = store
    this.storeCache = storeCache
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


  saveupdateone(): void {
    const hero: Hero = {id: 2, name: 'Manuela',saying: 'Hellos',dateLoaded: '3333-33-33'}
    const Updateaction = new EntityActionFactory().create<Update<Hero>>(
      'Hero',
      EntityOp.SAVE_UPDATE_ONE,
       {
          id:2,
          changes: hero
      }
     );
      this.store.dispatch(Updateaction);
  }

  saveupdateonesuccess(): void {
    const hero: Hero = {id: 2, name: 'Johan',saying: 'medina',dateLoaded: '5565-78-99'}
    const Updateaction = new EntityActionFactory().create<Update<Hero>>(
      'Hero',
      EntityOp.SAVE_UPDATE_ONE_SUCCESS,
       {
          id:2,
          changes: hero
      }
     );
      this.store.dispatch(Updateaction);
  }

  saveupdateoneerror(): void {
    const hero: Hero = {id: 2, name: 'Johan',saying: 'medina',dateLoaded: '5565-78-99'}
    const Updateaction = new EntityActionFactory().create<Update<Hero>>(
      'Hero',
      EntityOp.SAVE_UPDATE_ONE_ERROR,
       {
          id:2,
          changes: hero
      }
     );
      this.store.dispatch(Updateaction);
  }


  updateone(): void {
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


  saveupdatemany(): void {
    const herofirst: Hero = {id: 1, name: 'XXXXXX',saying: 'ccc',dateLoaded: '5555-55-55'}
    const herosecond: Hero = {id:2, name: 'YYYYY',saying: 'gggg',dateLoaded: '6666-66-66'}
    const updates: Update<Hero>[] = [{id:1 , changes: herofirst},{id:2 , changes: herosecond}]

    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_UPDATE_MANY,
      data: updates,
    };
    const UpdateactionMany = new EntityActionFactory().create(payload)
    this.store.dispatch(UpdateactionMany);
  }

  saveupdatemanysuccess(): void {
    const herofirst: Hero = {id: 1, name: 'WWWWW',saying: 'eee',dateLoaded: '4444-44-44'}
    const herosecond: Hero = {id:2, name: 'ZZZZZ',saying: 'ggggg',dateLoaded: '7777-77-77'}
    const updates: Update<Hero>[] = [{id:1 , changes: herofirst},{id:2 , changes: herosecond}]

    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_UPDATE_MANY_SUCCESS,
      data: updates,
    };
    const UpdateactionMany = new EntityActionFactory().create(payload)
    this.store.dispatch(UpdateactionMany);
  }

  saveupdatemanyerror(): void {
    const herofirst: Hero = {id: 1, name: 'WWWWW',saying: 'eee',dateLoaded: '4444-44-44'}
    const herosecond: Hero = {id:2, name: 'ZZZZZ',saying: 'ggggg',dateLoaded: '7777-77-77'}
    const updates: Update<Hero>[] = [{id:1 , changes: herofirst},{id:2 , changes: herosecond}]

    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_UPDATE_MANY_ERROR,
      data: updates,
    };
    const UpdateactionMany = new EntityActionFactory().create(payload)
    this.store.dispatch(UpdateactionMany);
  }



  updatemany(): void {
    const herofirst: Hero = {id: 1, name: 'Jefferson Medina',saying: 'jeff',dateLoaded: '2222-22-22'}
    const herosecond: Hero = {id:2, name: 'Pepa',saying: 'ppp',dateLoaded: '3333-33-33'}

    const updates: Update<Hero>[] = [{id:1 , changes: herofirst},{id:2 , changes: herosecond}]

    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.UPDATE_MANY,
      data: updates,
    };
    const UpdateactionMany = new EntityActionFactory().create(payload)
    this.store.dispatch(UpdateactionMany);
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
