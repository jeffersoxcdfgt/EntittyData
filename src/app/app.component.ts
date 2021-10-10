import { Component , OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { ChangeSet, ChangeSetItem, ChangeSetOperation, EntityCacheDispatcher, EntityCollectionService, EntityServices } from '@ngrx/data';
import { Observable } from 'rxjs';
import { Villain } from './models/villain';
import { changeSetItemFactory as cif } from '@ngrx/data';

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

  villainsService: EntityCollectionService<Villain>;
  loadingvillain$: Observable<boolean>;
  villains$: Observable<Villain[]>;

  constructor(entityServices: EntityServices,
    private cacheEntityDispatcher: EntityCacheDispatcher,
    ) {
    this.heroesService = entityServices.getEntityCollectionService('Hero');
    this.heroes$ = this.heroesService.entities$;
    this.loading$ =  this.heroesService.loading$;

    this.villainsService = entityServices.getEntityCollectionService('Villain');
    this.villains$ = this.villainsService.entities$;
    this.loadingvillain$ = this.villainsService.loading$;

    this.getChanges()
    this.getVillainChanges()
  }
 
  ngOnInit() {
    this.getHeroes();
    this.getVillains()
  }

  transaction(): void{
    const changes: ChangeSetItem[] = [
      cif.add('Hero', {
           id: 4,
           name: 'new heroe add 77',
           saying: 'Hello heroe',
           dateLoaded: '2012-06-06'
          }),
      cif.delete('Villain', [2,3])
    ];

    const changeSet: ChangeSet = { changes, tag: 'Delete mutiple data entity'}
    this.cacheEntityDispatcher.saveEntities(
      changeSet,
      'api/villains', // whatever your server expects (endpoint process information in backend)
      { isOptimistic: true }
    )
  }

 
  getHeroes(): void {
   this.heroesService.getAll()
  }

  getVillains(): void {
    this.villainsService.getAll()
   }
 

  getChanges = () =>{
    this.heroes$.subscribe((data)=>{
      console.log(data)
    })
  }

  getVillainChanges = () =>{
    this.villains$.subscribe((data)=>{
      console.log(data)
    })
  }


}
