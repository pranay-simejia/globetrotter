import { MigrationInterface, QueryRunner } from "typeorm";

export class DestinationIndex1746971921893 implements MigrationInterface {
    name = 'DestinationIndex1746971921893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "fun_fact"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "funFacts" text array`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "country" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "destinations" ALTER COLUMN "clues" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "destinations" ALTER COLUMN "clues" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "country" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "city" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "funFacts"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "fun_fact" text array`);
    }

}
