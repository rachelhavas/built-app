import { Controller, Get, Post, Patch, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BudgetItem } from './budget-item.entity';
import { BudgetItemsService } from './budget-items.service';
import { CreateBudgetItemDto } from './dto/create-budget-item.dto';
import { UpdateBudgetItemDto } from './dto/update-budget-item.dto';

@Controller('budget-items')
export class BudgetItemsController {
  constructor(private readonly budgetItemsService: BudgetItemsService) {}

  @Post()
  create(@Body() createBudgetItemDto: CreateBudgetItemDto): Promise<BudgetItem> {
    return this.budgetItemsService.create(createBudgetItemDto);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetItemDto: UpdateBudgetItemDto) {
    return this.budgetItemsService.update(+id, updateBudgetItemDto);
  }

  @Get()
  findAll(): Promise<BudgetItem[]> {
    return this.budgetItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<BudgetItem> {
    return this.budgetItemsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.budgetItemsService.remove(id);
  }
}

