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
    const hero = {id: 4, name: 'Hero for store', saying: 'Hello heroe for store', dateLoaded: '2012-07-07'}
    const changes: ChangeSetItem[] = [
      {
        op: ChangeSetOperation.Add,
        entityName: 'Hero',
        entities: [hero]
      },
      {
        op: ChangeSetOperation.Delete,
        entityName: 'Villain',
        entities: [2, 3] // delete by their ids
      }
    ];

    const changeSet: ChangeSet = { changes, tag: 'Operation Multiple'}
    const saveUrl =   'api/villains'
    this.cacheEntityDispatcher.saveEntities(changeSet, saveUrl)
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
