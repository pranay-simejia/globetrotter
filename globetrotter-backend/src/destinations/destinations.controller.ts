import { Controller, Get, Post, Body } from '@nestjs/common';
import { DestinationsService } from './destinations.service';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  getAllDestinations() {
    return this.destinationsService.getAllDestinations();
  }

  @Get('random')
  async getRandomDestinationWithOptions() {
    return this.destinationsService.getRandomDestinationWithOptions();
  }

  @Post('validate')
  async validateAnswer(@Body() body: { destinationId: number; selectedAnswer: string }) {
    return this.destinationsService.validateAnswer(body.destinationId, body.selectedAnswer);
  }
}
