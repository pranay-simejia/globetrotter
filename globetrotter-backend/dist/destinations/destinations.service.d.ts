import { Repository } from 'typeorm';
import { Destination } from './entities/destination.entity';
export declare class DestinationsService {
    private destinationRepository;
    constructor(destinationRepository: Repository<Destination>);
    getAllDestinations(): Promise<{
        options: string[];
        id: number;
        city: string;
        country: string;
        clues: string[];
        funFacts: string[];
        trivia: string[];
    }[]>;
    private getRandomIncorrectOptions;
}
