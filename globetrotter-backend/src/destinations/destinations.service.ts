import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destination } from './entities/destination.entity';

@Injectable()
export class DestinationsService {
  constructor(
    @InjectRepository(Destination)
    private destinationRepository: Repository<Destination>,
  ) {}

 async getAllDestinations() {
    try {
      // Fetch all destinations from the database
      const destinations = await this.destinationRepository.find();
      return destinations.map((destination) => {
        const correctOption = `${destination.city}, ${destination.country}`;
        const incorrectOptions = this.getRandomIncorrectOptions(
          destinations,
          correctOption,
        );
  
        return {
          ...destination,
          options: [correctOption, ...incorrectOptions].sort(() => Math.random() - 0.5), // Shuffle options
        };
      });
    } catch (error) {
      throw new Error(`Failed to fetch destinations: ${error.message}`);
    }    // Generate options for each destination
  }

  async getRandomDestinationWithOptions() {
    const correctDestination = await this.destinationRepository
      .createQueryBuilder('destination')
      .orderBy('RANDOM()')
      .getOne();

    if (!correctDestination) {
      throw new Error('No destinations found in the database.');
    }

    const incorrectDestinations = await this.destinationRepository
      .createQueryBuilder('destination')
      .where('id != :id', { id: correctDestination.id })
      .orderBy('RANDOM()')
      .limit(3)
      .getMany();

    const options = [
      ...incorrectDestinations.map((dest) => `${dest.city}, ${dest.country}`),
      `${correctDestination.city}, ${correctDestination.country}`,
    ].sort(() => Math.random() - 0.5);

    return {
      id: correctDestination.id,
      clues: correctDestination.clues,
      options,
    };
  }

  async validateAnswer(destinationId: number, selectedAnswer: string) {
    const destination = await this.destinationRepository.findOne({ where: { id: destinationId } });

    if (!destination) {
      throw new Error('Destination not found.');
    }

    const correctAnswer = `${destination.city}, ${destination.country}`;
    const isCorrect = selectedAnswer === correctAnswer;

    return {
      isCorrect,
      funFacts: destination.funFacts, // Include fun facts in the response
    };
  }

  private getRandomIncorrectOptions(destinations: any[], correctOption: string) {
    // Filter out the correct option
    const otherDestinations = destinations.filter(
      (dest) => `${dest.city}, ${dest.country}` !== correctOption,
    );

    // Randomly select 3 incorrect options
    const shuffled = otherDestinations.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3).map((dest) => `${dest.city}, ${dest.country}`);
  }
}
