import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { AddTrainerDto } from './dto/add-trainer.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.isTrainer = createUserDto.isTrainer;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async addTrainer(id: string, addTrainerDto: AddTrainerDto): Promise<User> {
    const curretUser = await this.usersRepository.findOne(id);

    return this.usersRepository.save({
      ...curretUser,
      ...addTrainerDto
    })
  }
}