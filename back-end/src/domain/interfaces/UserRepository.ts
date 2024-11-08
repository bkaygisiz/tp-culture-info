import { User  } from "../entities/User";

export interface UserRepository {
    create(user: User): User;
    find(username: string): User;
}