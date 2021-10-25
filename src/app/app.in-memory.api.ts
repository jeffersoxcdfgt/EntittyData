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
           ]
        }
    }
}