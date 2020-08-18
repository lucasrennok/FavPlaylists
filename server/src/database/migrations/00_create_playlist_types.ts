import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('playlist_types', table => {
        table.string('type').primary();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('playlist_types');
}