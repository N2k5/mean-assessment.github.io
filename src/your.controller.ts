import { Controller, Get, Post, Body } from '@nestjs/common';
import { YourService } from './your.service';

@Controller('your')
export class YourController {
  constructor(private readonly yourService: YourService) {}

  @Post()
  async create(@Body() body: { name: string; age: number }) {
    return this.yourService.create(body.name, body.age);
  }

  @Get()
  async findAll() {
    return this.yourService.findAll();
  }
}
