import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Hero: {
 
     /* optional settings */
    entityDispatcherOptions: { 
      optimisticAdd: true, 
      optimisticUpdate: true ,
      optimisticDelete: false
    }

  },
  Villain: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { Hero: 'Heroes' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};