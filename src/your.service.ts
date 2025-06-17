import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { YourSchema } from './schemas/your-schema.schema';

@Injectable()
export class YourService {
  constructor(@InjectModel('Your') private readonly yourModel: Model<any>) {}

  async create(name: string, age: number): Promise<any> {
    const createdEntity = new this.yourModel({ name, age });
    return await createdEntity.save();
  }

  async findAll(): Promise<any[]> {
    return await this.yourModel.find().exec();
  }
}