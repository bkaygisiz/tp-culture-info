"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
class Create {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(user) {
        return this.userRepository.create(user);
    }
}
exports.Create = Create;
