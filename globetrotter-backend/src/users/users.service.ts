import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(username: string): Promise<User> {
    // Check if the user already exists
    let user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      // Create a new user if not found
      user = this.userRepository.create({ username });
      return this.userRepository.save(user);
    }
    return user; // Return the existing user
  }

  async findUserByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { username } });
  }

  async updateUserScore(username: string, score: {correctScore:number,incorrectScore:number }): Promise<User> {
    console.log("score",score)
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new Error('User not found');
    }
    user.correctScore = score.correctScore;
    user.incorrectScore = score.incorrectScore;
    return this.userRepository.save(user);
  }

  async getUserScore(username: string): Promise<{correctScore:number,incorrectScore: number}> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new Error('User not found');
    }
    return {correctScore:user.correctScore ,incorrectScore : user.incorrectScore};
  }
}