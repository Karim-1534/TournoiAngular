export class Equipe {
    id!: number;
    nom!: string;


    constructor() { }

    public static fromJson(json: any): Equipe {
        return new Equipe();
    }
}
