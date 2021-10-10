import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
} from '@ngrx/data';
import { Villain } from '../models/villain';


@Injectable({ providedIn: 'root' })
export class VillainService extends DefaultDataService<Villain> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger) {
        super('Villain', http, httpUrlGenerator);
        logger.log('Created custom Villain EntityDataService');
    }
}