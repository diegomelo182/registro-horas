import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';

import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../schemas/user.schema';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async all(): Promise<User[]> {
    return this.userService.fetchAll();
  }

  @Get(':id')
  async one(@Param() params): Promise<User> {
    return this.userService.fetchOne(<ObjectId>params.id);
  }

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.create(body);
  }

  @Put(':id')
  async update(@Param() params, @Body() body: CreateUserDto): Promise<User> {
    return this.userService.update(params.id, body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<User> {
    return this.userService.delete(params.id);
  }
}
