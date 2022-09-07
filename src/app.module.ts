import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetItemsModule } from './budget-items/budget-items.module';
import { BudgetItem } from './budget-items/budget-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [BudgetItem],
      migrations: [
        "src/migrations/*.js"
      ],
      migrationsTableName: "budget_item_table",
      migrationsRun: true,
      synchronize: false
    }),
    BudgetItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
