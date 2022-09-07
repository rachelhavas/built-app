import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BudgetItem } from './budget-item.entity';
import { CreateBudgetItemDto } from './dto/create-budget-item.dto';
import { UpdateBudgetItemDto } from './dto/update-budget-item.dto';

@Injectable()
export class BudgetItemsService {
  constructor(
    @InjectRepository(BudgetItem)
    private budjetItemRepository: Repository<BudgetItem>,
  ) {}

  create(createBudgetItemDto: CreateBudgetItemDto) {
    return 'This action adds a new budgetItem';
  }

  findAll(): Promise<BudgetItem[]> {
    return this.budjetItemRepository.find();
  }

  findOne(id: number): Promise<BudgetItem> {
    return this.budjetItemRepository.findOneBy({ id });
  }

  update(id: number, updateBudgetItemDto: UpdateBudgetItemDto) {
    return `This action updates a #${id} budgetItem`;
  }

  async remove(id: number): Promise<void> {
    await this.budjetItemRepository.delete(id);
  }
}
