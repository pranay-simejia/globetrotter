import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(username: string): Promise<User>;
    findUserByUsername(username: string): Promise<User | null>;
    updateUserScore(username: string, score: {
        correctScore: number;
        incorrectScore: number;
    }): Promise<User>;
    getUserScore(username: string): Promise<{
        correctScore: number;
        incorrectScore: number;
    }>;
}
