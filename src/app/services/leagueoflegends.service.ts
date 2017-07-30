import { Injectable } from '@angular/core';
import { HttpModule, RequestOptions, Request } from '@angular/http'
import { Champion } from '../components/champion/champion-detail.component';

@Injectable()
export class LeagueOfLegendsService {
    getChampions(): Champion[] {
        return; 
    }
}