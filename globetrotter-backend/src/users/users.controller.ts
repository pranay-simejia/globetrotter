import { Controller, Post, Body, Get, Param, Patch, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body('username') username: string) {
    if (!username || username.trim() === '') {
      throw new BadRequestException('Username is required');
    }

    const existingUser = await this.usersService.findUserByUsername(username);
    if (existingUser) {
      return existingUser; // Return the existing user if already in the database
    }

    return this.usersService.createUser(username.trim());
  }

  @Patch(':username/score')
  async updateUserScore(
    @Param('username') username: string,
    @Body() score: { correctScore: number, incorrectScore: number },
  ) {   console.log("score",score)
    return this.usersService.updateUserScore(username.trim(), score);
  }

  @Get(':username/score')
  async getUserScore(@Param('username') username: string) {
    return this.usersService.getUserScore(username.trim());
  }
}