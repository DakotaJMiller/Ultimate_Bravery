import { Component } from '@angular/core';

@Component({
    selector: 'champion-detail'
})

export class ChampionDetailComponent {
    champion: Champion
}

export class Champion {
    Name: string
    Role: ChampionRole
    PictureURL: string
}

export enum ChampionRole {
    Marksman = 0,
    Assassin = 1, 
    Fighter = 2, 
    Support = 3, 
    Tank = 4
}