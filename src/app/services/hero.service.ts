import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  DefaultDataService,
  HttpUrlGenerator,
  Logger,
} from '@ngrx/data';
import { Hero } from '../models/hero';


@Injectable({ providedIn: 'root' })
export class HeroService extends DefaultDataService<Hero> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger) {
        super('Hero', http, httpUrlGenerator);
        logger.log('Created custom Hero EntityDataService');
    }
}