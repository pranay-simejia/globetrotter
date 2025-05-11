import { DestinationsService } from './destinations.service';
export declare class DestinationsController {
    private readonly destinationsService;
    constructor(destinationsService: DestinationsService);
    getAllDestinations(): Promise<{
        options: string[];
        id: number;
        city: string;
        country: string;
        clues: string[];
        funFacts: string[];
        trivia: string[];
    }[]>;
}
