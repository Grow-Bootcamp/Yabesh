import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1791375558337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',

                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },

                    {
                        name: 'name',
                        type: 'varchar',
                        length: '50',
                    },

                    {
                        name: 'email',
                        type: 'varchar',
                        length: '150',
                        isUnique: true,
                    }, 

                    {
                        name: 'age',
                        type: 'int'
                    }, 

                    {
                        name: 'role',
                        type: 'varchar',
                        length: '50',
                        default: "'user'",
                    },

                    {
                        name: 'createdAt',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                    },

                    {
                        name: 'updatedAt',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
