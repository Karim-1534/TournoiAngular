import { Equipe } from "../equipe/equipe";
import { Evenement } from "../evenements/evenement";
export class Tournoi {
    id!: number;
    nom!: string;
    description!: string;
    equipes!: string[];
    listEquipes: Equipe[] = [];
    ev!: string;

    constructor() { }

    public static fromJson(json: any): Tournoi {
        return new Tournoi();
    }
}
