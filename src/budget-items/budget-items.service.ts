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
    private readonly budjetItemRepository: Repository<BudgetItem>,
  ) {}

  create(createBudgetItemDto: CreateBudgetItemDto): Promise<BudgetItem> {
    const budgetItem = new BudgetItem();
    budgetItem.name = createBudgetItemDto.name;
    budgetItem.amount = createBudgetItemDto.amount;
    budgetItem.owner = createBudgetItemDto.owner;
    budgetItem.startDate = createBudgetItemDto.startDate;
    budgetItem.endDate = createBudgetItemDto.endDate;
    budgetItem.isActive = createBudgetItemDto.isActive;
    return this.budjetItemRepository.save(budgetItem);
  }

  findAll(): Promise<BudgetItem[]> {
    return this.budjetItemRepository.find();
  }

  findOne(id: number): Promise<BudgetItem> {
    return this.budjetItemRepository.findOneBy({ id: id });
  }

  update(id: number, updateBudgetItemDto: UpdateBudgetItemDto) {
    return `This action updates a #${id} budgetItem`;
  }

  async remove(id: number): Promise<void> {
    await this.budjetItemRepository.delete(id);
  }
}
