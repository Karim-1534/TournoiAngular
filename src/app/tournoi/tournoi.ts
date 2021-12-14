import { Equipe } from "../equipe/equipe";
export class Tournoi {
    id!: number;
    nom!: string;
    description!: string;
    equipes!: string[];
    listEquipes: Equipe[] = [];

    constructor() { }

    public static fromJson(json: any): Tournoi {
        return new Tournoi();
    }
}
