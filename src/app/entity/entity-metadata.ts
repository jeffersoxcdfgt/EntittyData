import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Hero: {
 
     /* optional settings */
    entityDispatcherOptions: { 
      optimisticAdd: true, 
      optimisticUpdate: true ,
      optimisticDelete: true
    }

  },
  Villain: {
     /* optional settings */
     entityDispatcherOptions: { 
      optimisticAdd: true, 
      optimisticUpdate: true ,
      optimisticDelete: true
    }

  }
};

// because the plural of "hero" is not "heros"
const pluralNames = { 
  Hero: 'Heroes' ,
  Villain: 'Villains'
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};