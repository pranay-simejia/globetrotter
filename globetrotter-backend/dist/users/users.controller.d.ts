import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(username: string): Promise<import("./entities/user.entity").User>;
    updateUserScore(username: string, score: {
        correctScore: number;
        incorrectScore: number;
    }): Promise<import("./entities/user.entity").User>;
    getUserScore(username: string): Promise<{
        correctScore: number;
        incorrectScore: number;
    }>;
}
