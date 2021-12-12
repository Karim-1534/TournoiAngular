export class Evenement {
    id!: number;
    nom!: string;
    dateDeb!: Date;
    dateFin!: Date;

    constructor(){}

    public static fromJson(json:any):Evenement {
        return new Evenement();
    }
}
