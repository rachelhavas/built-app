import Joi from 'joi';

export class CreateBudgetItemDto {
    id: number;
    name: string;
    amount: string;
    owner: string;
    startDate: string;
    endDate: string;
    isActive: boolean;
}

/*export const BudgetItemSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().alphanum().required(),
    amount: Joi.string().required(),
    owner: Joi.string().alphanum().required(),
    startDate: Joi.string(),
    endDate: Joi.string(),
    isVerified: Joi.boolean().required(),
  }).options({
    abortEarly: false,
  });*/
