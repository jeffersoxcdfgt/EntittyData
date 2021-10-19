import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppInMemoryApi  implements InMemoryDbService{
      createDb(): any{
        return {
          heroes: [
            {
              id: 1,
              name: 'Heroe 1',
              saying: 'my favorite herroes',
              dateLoaded: '2021-05-30'
            },
            {
              id: 2,
              name: 'Heroe 2',
              saying: 'my favorite herroes 2',
              dateLoaded: '2021-05-31'
            },
           /* {
              id: 3,
              name: 'Heroe 3',
              saying: 'my favorite herroes 3',
              dateLoaded: '2021-06-30'
            }*/
           ]
        }
    }
}