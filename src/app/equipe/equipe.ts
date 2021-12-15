import { Tournoi } from "../tournoi/tournoi";

export class Equipe {
    id!: number;
    nom!: string;
    trn!: string;
    tournoi!: Tournoi;


    constructor() { }

    public static fromJson(json: any): Equipe {
        return new Equipe();
    }
}
