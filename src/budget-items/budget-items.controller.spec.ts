import { Test, TestingModule } from '@nestjs/testing';
import { CreateBudgetItemDto } from './dto/create-budget-item.dto';
import { BudgetItemsController } from './budget-items.controller';
import { BudgetItemsService } from './budget-items.service';

const createBudgetItemDto: CreateBudgetItemDto = {
  id: 1,
  name: 'name1',
  amount: '100.00',
  owner: 'owner1',
  startDate: '01/01/2022',
  endDate: '01/01/2023',
  isActive: true,
};

describe('BudgetItemsController', () => {
  let budgetItemsController: BudgetItemsController;
  let budgetItemsService: BudgetItemsService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BudgetItemsController],
      providers: [
        BudgetItemsService,
        {
          provide: BudgetItemsService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((budgetItem: CreateBudgetItemDto) =>
                Promise.resolve({ id: 1, ...budgetItem }),
              ),
            findAll: jest.fn().mockResolvedValue([
              {
                id: 1,
                name: 'name1',
                amount: '100.00',
                owner: 'owner1',
                startDate: '01/01/2022',
                endDate: '01/01/2023',
                isActive: true,
              },
              {
                id: 2,
                name: 'name2',
                amount: '200.00',
                owner: 'owner2',
                startDate: '01/01/2022',
                endDate: '01/01/2023',
                isActive: true,
              },
            ]),
            findOne: jest.fn().mockImplementation((id: number) =>
              Promise.resolve({
                id: 1,
                name: 'name1',
                amount: '100.00',
                owner: 'owner1',
                startDate: '01/01/2023',
                endDate: '01/01/2023',
                isActive: true,
              }),
            ),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    budgetItemsController = app.get<BudgetItemsController>(BudgetItemsController);
    budgetItemsService = app.get<BudgetItemsService>(BudgetItemsService);
  });

  it('should be defined', () => {
    expect(budgetItemsController).toBeDefined();
  });

  describe('create()', () => {
    it('should create a budget item', () => {
      budgetItemsController.create(createBudgetItemDto);
      expect(budgetItemsController.create(createBudgetItemDto)).resolves.toEqual({
        id: 1,
        ...createBudgetItemDto,
      });
      expect(budgetItemsService.create).toHaveBeenCalledWith(createBudgetItemDto);
    });
  });

  describe('findAll()', () => {
    it('should find all budget items ', () => {
      budgetItemsController.findAll();
      expect(budgetItemsService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne()', () => {
    it('should find a budget item', () => {
      expect(budgetItemsController.findOne(1)).resolves.toEqual({
        id: 1,
        name: 'name1',
        amount: '100.00',
        owner: 'owner1',
        startDate: '01/01/2023',
        endDate: '01/01/2023',
        isActive: true,
      });
      expect(budgetItemsService.findOne).toHaveBeenCalled();
    });
  });

  describe('remove()', () => {
    it('should remove the budget item', () => {
      budgetItemsController.remove(1);
      expect(budgetItemsService.remove).toHaveBeenCalled();
    });
  });
});