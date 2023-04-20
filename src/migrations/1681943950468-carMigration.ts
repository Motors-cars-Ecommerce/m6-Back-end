import { MigrationInterface, QueryRunner } from "typeorm";

export class CarMigration1681943950468 implements MigrationInterface {
    name = 'CarMigration1681943950468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" ADD "main_image" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "main_image"`);
    }

}
