import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((coffee) => coffee.id === +id);
    if (!coffee) {
      throw new HttpException(
        `Coffee with id #${id} do not exists`,
        HttpStatus.NOT_FOUND,
      );
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    this.coffees.push({ ...createCoffeeDto, id: this.coffees.length + 1 });
    return this.coffees;
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    } else {
      throw new HttpException(
        `Coffee with id #${id} do not exists`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = this.findOne(id);
    if (!coffee) {
      throw new HttpException(
        `Coffee with id #${id} do not exists`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
