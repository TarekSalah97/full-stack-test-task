import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async createUser(data: Partial<User>): Promise<UserDocument> {
    try {
      const user = new this.userModel(data);
      return await user.save();
    } catch (error) {
      throw new InternalServerErrorException('Failed to create user');
    }
  }
}
