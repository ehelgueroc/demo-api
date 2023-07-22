import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('')
  fetchAll() {
    return 'All the coffees';
  }
}
