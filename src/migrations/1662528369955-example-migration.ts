import { MigrationInterface, QueryRunner } from "typeorm"

export class exampleMigration1662528369955 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "budgetItem" RENAME COLUMN "name" TO "title"`,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "budgetItem" RENAME COLUMN "title" TO "name"`,
        )
    }

}
