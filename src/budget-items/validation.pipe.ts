import { PipeTransform, BadRequestException } from '@nestjs/common';

import { CreateBudgetItemDto } from './dto/create-budget-item.dto';

/*import { BudgetItemSchema } from './dto/create-budget-item.dto';

export class CreateBudgetItemValidatorPipe implements PipeTransform<CreateBudgetItemDto> {
  public transform(value: CreateBudgetItemDto): CreateBudgetItemDto {
    const result = BudgetItemSchema.validate(value);
    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    }
    return value;
  }
}*/