import { Equipe } from "../equipe/equipe";

export class Joueur {
    id!: number;
    nom!: string;
    niveau!: string;    
    eqp!: string;
    user!: string;
    joueurs: Joueur []=[];
    joueur!: Joueur;

    constructor() { }

    public static fromJson(json: any): Joueur {
        return new Joueur();
    }
}
