import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetItemsService } from './budget-items.service';
import { BudgetItemsController } from './budget-items.controller';
import { BudgetItem } from './budget-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetItem])],
  controllers: [BudgetItemsController],
  providers: [BudgetItemsService]
})
export class BudgetItemsModule {}
