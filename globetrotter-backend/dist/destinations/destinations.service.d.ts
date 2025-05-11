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
    getRandomDestinationWithOptions(): Promise<{
        id: number;
        clues: string[];
        options: string[];
    }>;
    validateAnswer(destinationId: number, selectedAnswer: string): Promise<{
        isCorrect: boolean;
        funFacts: string[];
    }>;
    private getRandomIncorrectOptions;
}
