import { Evenement } from './evenements/evenement';
import { Role } from './role';

export class User {
    id!: number
    login!:string;
    password!: string;
    roles!: string[];
    ev!: Evenement;
}
