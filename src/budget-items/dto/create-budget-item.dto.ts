export class CreateBudgetItemDto {
    id: number;
    name: string;
    amount: string;
    owner: string;
    startDate: string;
    endDate: string;
    isActive: boolean;
}
