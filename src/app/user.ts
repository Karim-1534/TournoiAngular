import { Role } from './role';

export class User {
    login:string = "";
    password: string = "";
    roles: Role = new Role();
}
