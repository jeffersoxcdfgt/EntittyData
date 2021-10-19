import { Component , OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { EntityActionFactory, EntityActionPayload, EntityCache, EntityCollection, EntityCollectionService, EntityOp, EntityServices } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';

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

  addone(): void{
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

  addmany(): void {
    const adddata: Hero[] = [
                          { id: 3, name: 'rftyyh',saying: 'yuuy',dateLoaded: '8545-88-99'},
                          { id:4, name: 'ghgh',saying: 'tggg',dateLoaded: '788-88-19'}
                          ]
    const payload: EntityActionPayload = {
    entityName: 'Hero',
    entityOp: EntityOp.ADD_MANY,
    data: adddata,
    };
    const addall = new EntityActionFactory().create(payload)
    this.store.dispatch(addall);

  }


  addall(): void {
    const adddata: Hero[] = [
                          { id: 3, name: 'rftyyh',saying: 'yuuy',dateLoaded: '8545-88-99'},
                          { id:4, name: 'ghgh',saying: 'tggg',dateLoaded: '788-88-19'}
                          ]
    const payload: EntityActionPayload = {
    entityName: 'Hero',
    entityOp: EntityOp.ADD_ALL,
    data: adddata,
    };
    const addall = new EntityActionFactory().create(payload)
    this.store.dispatch(addall);
  }


  saveaddmany(): void {
    const addrows: Hero[] = [{id: 3, name: 'fgg',saying: 'picgfgfo',dateLoaded: '58452-55-99'},
                            {id:4, name: 'magffgco',saying: 'ghghjjj',dateLoaded: 'r343-99-99'}]
    const payload: EntityActionPayload = {
     entityName: 'Hero',
     entityOp: EntityOp.SAVE_ADD_MANY,
     data: addrows,
    };
    const addsavemanyactions = new EntityActionFactory().create(payload)
    this.store.dispatch(addsavemanyactions);
  }

  saveaddmanysuccess(): void {
    const addrows: Hero[] = [{id: 3, name: 'fgg',saying: 'picgfgfo',dateLoaded: '58452-55-99'},
                            {id:4, name: 'magffgco',saying: 'ghghjjj',dateLoaded: 'r343-99-99'}]
    const payload: EntityActionPayload = {
     entityName: 'Hero',
     entityOp: EntityOp.SAVE_ADD_MANY_SUCCESS,
     data: addrows,
    };
    const addsavemanyactions = new EntityActionFactory().create(payload)
    this.store.dispatch(addsavemanyactions);
  }

  saveaddmanyerror(): void {
    const addrows: Hero[] = [{id: 3, name: 'fgg',saying: 'picgfgfo',dateLoaded: '58452-55-99'},
                            {id:4, name: 'magffgco',saying: 'ghghjjj',dateLoaded: 'r343-99-99'}]
    const payload: EntityActionPayload = {
     entityName: 'Hero',
     entityOp: EntityOp.SAVE_ADD_MANY_ERROR,
     data: addrows,
    };
    const addsavemanyactions = new EntityActionFactory().create(payload)
    this.store.dispatch(addsavemanyactions);
  }

  saveaddone(): void {
    const addhero: Hero = {id: 3, name: 'josre',saying: 'wewew',dateLoaded: '2323-23-33'}
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_ADD_ONE,
      data: addhero,
    };
    const Addactionone = new EntityActionFactory().create(payload)
    this.store.dispatch(Addactionone);
  }


  saveaddonesuccess(): void {
    const addhero: Hero = {id: 3, name: 'josre',saying: 'wewew',dateLoaded: '4444-44-44'}
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_ADD_ONE_SUCCESS,
      data: addhero,
    };
    const Addactionone = new EntityActionFactory().create(payload)
    this.store.dispatch(Addactionone);
  }

  saveaddoneerror(): void {
    const addhero: Hero = {id: 3, name: 'josre',saying: 'wewew',dateLoaded: '3434-44-66'}
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_ADD_ONE_ERROR,
      data: addhero,
    };
    const Addactionone = new EntityActionFactory().create(payload)
    this.store.dispatch(Addactionone);
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


  upsertone(): void {
    const idprocess = 2
    const hero: Hero ={id: idprocess, name: 'fghfhfhf',saying: 'ttttt',dateLoaded: '9898-34-77'};
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.UPSERT_ONE,
      data: hero,
      //mergeStrategy: MergeStrategy.IgnoreChanges,
      // .. other options ..
    };
    const Upsertaction = new EntityActionFactory().create(payload)
    this.store.dispatch(Upsertaction);
  }


  upsertmany(): void {
    const upsert: Hero[] = [{id: 1, name: 'pilo',saying: 'pico',dateLoaded: '5852-55-99'},
                            {id:2, name: 'maco',saying: 'jjj',dateLoaded: '8454-99-99'}]
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.UPSERT_MANY,
      data: upsert,
    };
    const UpsertctionMany = new EntityActionFactory().create(payload)
    this.store.dispatch(UpsertctionMany);
  }

  saveupsertone() : void {
    const saveupsertone: Hero = {id: 3, name: 'xilo',saying: 'xilo',dateLoaded: '1122-55-77'}
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_UPSERT_ONE,
      data: saveupsertone,
    };
    const UpsertctionOne = new EntityActionFactory().create(payload)
    this.store.dispatch(UpsertctionOne);

  }

  saveupsertonesuccess() : void {
    const saveupsertonesucess: Hero = {id: 2, name: 'POPEYE',saying: 'pppp',dateLoaded: '5677-55-78'}
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_UPSERT_ONE_SUCCESS,
      data: saveupsertonesucess,
    };
    const UpsertctionOne = new EntityActionFactory().create(payload)
    this.store.dispatch(UpsertctionOne);
  }

  saveupsertoneerror() : void {
    const saveupsertonesucess: Hero = {id: 2, name: 'LICA',saying: 'lll',dateLoaded: '8877-99-44'}
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_UPSERT_ONE_ERROR,
      data: saveupsertonesucess,
    };
    const UpsertctionOne = new EntityActionFactory().create(payload)
    this.store.dispatch(UpsertctionOne);

  }

  saveupsertmany() : void {
    const upsertmany: Hero[] = [{id: 3, name: 'frvg',saying: 'ghj',dateLoaded: '94541-85-93'},
                            {id:4, name: 'Uva',saying: 'ghgh',dateLoaded: '8552-89-56'}]
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_UPSERT_MANY,
      data: upsertmany,
    };
    const UpsertctionMany = new EntityActionFactory().create(payload)
    this.store.dispatch(UpsertctionMany);
  }

  saveupsertmanysuccess() : void {
    const upsertmany: Hero[] = [{id: 3, name: 'frvg',saying: 'ghj',dateLoaded: '94541-85-93'},
                            {id:4, name: 'Uva',saying: 'ghgh',dateLoaded: '8552-89-56'}]
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_UPSERT_MANY_SUCCESS,
      data: upsertmany,
    };
    const UpsertctionMany = new EntityActionFactory().create(payload)
    this.store.dispatch(UpsertctionMany);
  }

  saveupsertmanyerror() : void {
    const upsertmany: Hero[] = [{id: 3, name: 'frvg',saying: 'ghj',dateLoaded: '94541-85-93'},
                            {id:4, name: 'Uva',saying: 'ghgh',dateLoaded: '8552-89-56'}]
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SAVE_UPSERT_MANY_ERROR,
      data: upsertmany,
    };
    const UpsertctionMany = new EntityActionFactory().create(payload)
    this.store.dispatch(UpsertctionMany);
  }

  removeone(): void {
    const Deleteaction = new EntityActionFactory().create<number>(
      'Hero',
      EntityOp.REMOVE_ONE,
      2,
    );
    this.store.dispatch(Deleteaction);
  }

  removemany(): void {
    const Deleteactionmany = new EntityActionFactory().create<number[]>(
      'Hero',
      EntityOp.REMOVE_MANY,
      [1,2],
    );
    this.store.dispatch(Deleteactionmany);
  }

  removeall(): void {
    const Deleteactionall = new EntityActionFactory().create<number[]>(
      'Hero',
      EntityOp.REMOVE_ALL
    );
    this.store.dispatch(Deleteactionall);
  }

  savedeleteone(): void {
    const Deleteaction = new EntityActionFactory().create<number>(
      'Hero',
      EntityOp.SAVE_DELETE_ONE,
      2,
    );
    this.store.dispatch(Deleteaction);
  }

  savedeleteonesuccess(): void {
    const Deleteaction = new EntityActionFactory().create<number>(
      'Hero',
      EntityOp.SAVE_DELETE_ONE_SUCCESS,
      2,
    );
    this.store.dispatch(Deleteaction);
  }

  savedeleteonerror(): void {
    const Deleteaction = new EntityActionFactory().create<number>(
      'Hero',
      EntityOp.SAVE_DELETE_ONE_ERROR,
      2,
    );
    this.store.dispatch(Deleteaction);
  }


  savedeletemany(): void {
    const Deleteaction = new EntityActionFactory().create<number[]>(
      'Hero',
      EntityOp.SAVE_DELETE_MANY,
      [1,2]
    );
    this.store.dispatch(Deleteaction);
  }

  savedeletemanysuccess(): void {
    const Deleteaction = new EntityActionFactory().create<number[]>(
      'Hero',
      EntityOp.SAVE_DELETE_MANY_SUCCESS,
      [1,2]
    );
    this.store.dispatch(Deleteaction);
  }

  savedeletemanyerror(): void {
    const Deleteaction = new EntityActionFactory().create<number[]>(
      'Hero',
      EntityOp.SAVE_DELETE_MANY_ERROR,
      [1,2]
    );
    this.store.dispatch(Deleteaction);
  }

  setFilter(): void {
    const payload: EntityActionPayload = {
      entityName: 'Hero',
      entityOp: EntityOp.SET_FILTER,
      data:1,
    };
    const setfilter = new EntityActionFactory().create(payload)
    this.store.dispatch(setfilter);

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
