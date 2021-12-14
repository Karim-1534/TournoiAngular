import { Tournoi } from "../tournoi/tournoi";

export class Evenement {
    id!: number;
    nom!: string;
    date!: Date;
    lieu!: Date;
    tournois!: string[];
    listTournois: Tournoi[] = [];


    constructor(){}

    public static fromJson(json:any):Evenement {
        return new Evenement();
    }
}
