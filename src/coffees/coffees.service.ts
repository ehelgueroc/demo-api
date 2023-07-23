import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

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

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
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

  update(id: string, updateCoffeeDto: any) {
    const coffee = this.findOne(id);
    if (!coffee) {
      throw new HttpException(
        `Coffee with id #${id} do not exists`,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
