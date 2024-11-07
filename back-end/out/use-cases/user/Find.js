"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Find = void 0;
class Find {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(username) {
        return this.userRepository.find(username);
    }
}
exports.Find = Find;
