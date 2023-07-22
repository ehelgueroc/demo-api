import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('')
  fetchAll() {
    return 'All the coffees';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `Get coffee with id ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
