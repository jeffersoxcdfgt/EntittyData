import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppInMemoryApi  implements InMemoryDbService{
      createDb(): any{
        return {
          users: [
            {
              id: 1,
              name: 'User 1',
            },
            {
              id: 2,
              name: 'User 2'
            }
           ],
          heroes: [
            {
              id: 1,
              name: 'Heroe 1',
              saying: 'my favorite heroes 1',
              dateLoaded: '2021-05-30'
            },
            {
              id: 2,
              name: 'Heroe 2',
              saying: 'my favorite heroes 2',
              dateLoaded: '2021-05-28'
            }
           ],
           books:[
             {
              id: 1,
              userId: 1,
              name: 'book1'
             },
             {
              id: 2,
              userId: 1,
              name: 'book2'
             },
             {
              id: 3,
              userId: 1,
              name: 'book3'
             },
             {
              id: 4,
              userId: 2,
              name: 'book4'
             }
           ]
        }
    }
}