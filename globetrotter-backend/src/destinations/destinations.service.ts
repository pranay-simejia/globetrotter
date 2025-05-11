import { Injectable } from '@nestjs/common';
import {NotFoundException } from '@nestjs/common';
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
