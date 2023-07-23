import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('')
  fetchAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;

    return `All the coffees. Limit: ${limit} and offset ${offset}`;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `Get coffee with id ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log(body);
    return `Updated ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Delete this id ${id}`;
  }
}
