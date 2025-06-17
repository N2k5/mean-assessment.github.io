import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { YourService } from './your.service';
import { YourController } from './your.controller';
import { YourSchema } from './schemas/your-schema.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Your', schema: YourSchema }])],
  providers: [YourService],
  controllers: [YourController],
})
export class YourModule {}
