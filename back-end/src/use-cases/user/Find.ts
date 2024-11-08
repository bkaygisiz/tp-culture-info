
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/interfaces/UserRepository";

export class Find {
    constructor(private userRepository: UserRepository){}

    execute(username: string) {
        return this.userRepository.find(username)
    }
}