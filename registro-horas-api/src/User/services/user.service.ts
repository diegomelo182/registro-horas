import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await new this.userModel({
      ...createUserDto,
      createdAt: new Date(),
    }).save();
  }

  async update(_id: ObjectId, userDto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(_id, userDto).exec();
  }

  async delete(_id: ObjectId): Promise<User> {
    return await this.userModel.findByIdAndDelete(_id).exec();
  }

  async fetchAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async fetchOne(_id: ObjectId): Promise<User> {
    return await this.userModel.findById(_id).exec();
  }
}
