import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('playlists', table => {
        table.integer('id').notNullable().unique();
        table.string('name').notNullable();

        table.string('type')
            .notNullable()
            .references('type')
            .inTable('playlist_types')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.primary(['type','name'])
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('playlists');
}