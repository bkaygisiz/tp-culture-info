import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/interfaces/UserRepository";

export class Create {
    constructor(private userRepository: UserRepository){}

    execute(user: User) {
        return this.userRepository.create(user)
    }
}