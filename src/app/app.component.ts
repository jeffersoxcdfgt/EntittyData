import { Component , OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { Observable } from 'rxjs';

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

  constructor(entityServices: EntityServices) {
    this.heroesService = entityServices.getEntityCollectionService('Hero');
    this.heroes$ = this.heroesService.entities$;
    this.loading$ =  this.heroesService.loading$;
    this.getChanges()
  }
 
  ngOnInit() {
    this.getHeroes();
  }
  add(): void {
    this.heroesService.add({id: 4, name: 'gggg',saying: 'fgfgf',dateLoaded: '2012-05-05'});    
  }
 
  delete(): void {
   this.heroesService.delete(1)
  }
 
  getHeroes(): void {
   this.heroesService.getAll()
  }
 
  update(): void {
    this.heroesService.update({id: 2, name: 'Manuela',saying: 'Hellos',dateLoaded: '1111-11-11'});
  }

  getForName(){
    /*this.heroesService.getWithQuery('name=Heroe 3&id=1').subscribe((data)=>{
          console.log(data)
    })*/
  }

  getById = () =>{
     // this.heroesService.getByKey(1)
  }

  getChanges = () =>{
    this.heroes$.subscribe((data)=>{
      console.log(data)
    })
  }
}
