export class Tournoi {
     id!: number;
    nom!: string;
    description!: string;

    constructor(){}

    public static fromJson(json:any):Tournoi {
        return new Tournoi();
    }
}
