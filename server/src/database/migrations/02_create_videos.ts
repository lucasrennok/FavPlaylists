import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('videos', table => {
        table.increments('id').primary();
        
        table.string('title').notNullable().unique();
        table.string('url').notNullable().unique();
        table.string('poster').notNullable();
        
        table.string('playlist_id')
            .notNullable()
            .references('id')
            .inTable('playlists')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('videos');
}