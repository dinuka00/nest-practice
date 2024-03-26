import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMig1711430966667 implements MigrationInterface {
    name = 'NewMig1711430966667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`price\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`price\``);
    }

}
