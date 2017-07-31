import { Injectable } from '@angular/core';
import { HttpModule, RequestOptions, Request, Headers, Http } from '@angular/http'
import { Champion } from '../components/champion/champion-detail.component';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class LeagueOfLegendsService {
    Key: 'f251f0f7-554f-45fe-9b74-26457616efa6';
    constructor(private http: Http) { }

    getChampions(summonerID: Number): Promise<Champion[]> {
        return;
    }

    getSummonerID(summonerName: string): Number {
        return; 
    }
}
