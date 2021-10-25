import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EntityActionFactory, EntityCache, EntityCollection, EntityCollectionService, EntityOp, EntityServices } from '@ngrx/data';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.css']
})
export class HeroeListComponent implements OnInit , AfterViewInit{

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
  }

  ngOnInit(): void{
    this.getHeroes()
  }

  getHeroes (): void{
    const Queryaction = new EntityActionFactory().create<Hero>(
      'Hero',
      EntityOp.QUERY_ALL,
    );
    this.store.dispatch(Queryaction);
  }

  ngAfterViewInit(): void{
      this.heroes$.subscribe((data)=>{
        console.log(data)
      })
  }
}
