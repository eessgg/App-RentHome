import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1603757939798 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "houses",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "dono",
            type: "varchar",
          },
          {
            name: "latitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "longitude",
            type: "decimal",
            scale: 10,
            precision: 2,
          },
          {
            name: "details",
            type: "text",
          },
          {
            name: "phonenumber",
            type: "integer",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('houses')
  }
}
