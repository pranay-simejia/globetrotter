"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationIndex1746971921893 = void 0;
class DestinationIndex1746971921893 {
    name = 'DestinationIndex1746971921893';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "fun_fact"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "funFacts" text array`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "country" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "destinations" ALTER COLUMN "clues" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "destinations" ALTER COLUMN "clues" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "country"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "country" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "city" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "destinations" DROP COLUMN "funFacts"`);
        await queryRunner.query(`ALTER TABLE "destinations" ADD "fun_fact" text array`);
    }
}
exports.DestinationIndex1746971921893 = DestinationIndex1746971921893;
//# sourceMappingURL=1746971921893-destination-index.js.map