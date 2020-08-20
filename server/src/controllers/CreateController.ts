import {Request, Response} from 'express';

import db from '../database/connection';

export default class CreateController{
    async getSearch(request: Request, response: Response){
        const {search} = request.query;
        let searchAux;
        if(search===undefined){
            searchAux = '';
        }else{
            searchAux = search;
        }

        const searchSelected = await db('videos')
            .join('playlists', 'playlists.id', '=', 'videos.playlist_id')
            .select('videos.title','videos.url','videos.poster', 'playlists.type', 'playlists.name')
            .where('videos.title', 'like', '%'+searchAux+'%');
            
        return response.json(searchSelected);
    }

    async create(request: Request, response: Response) {
        const{
            type,
            name,
            title,
            url,
            poster
        } = request.body;

        console.log("Data:",type,name,title,url,poster);

        if(type==='' || name==='' || title==='' || url==='' || poster===''){
            console.log('ERROR: Values not filled');
            return response.status(400).json({
                error: 'Values not filled'
            });
        }

        const idSelected = await db('playlists').max('id');
        let id = idSelected[0]['max(`id`)']+1;
        
        if(typeof id!=='number' || id===undefined){
            id = 1;
        }

        let trx = await db.transaction();
        //create types
        try{
            await trx('playlist_types').insert({
                type
            });
            await trx.commit();
        }catch(err){
            console.log('type ja criado')
            await trx.rollback();
        }
        trx = await db.transaction();
        //create playlists
        try{
            await trx('playlists').insert({
                type,
                name,
                id
            });
            await trx.commit();
        }catch(err){
            console.log('playlist ja criado')
            await trx.rollback();
        }
        trx = await db.transaction();
        //add videos
        try{
            const playlistIdSelected = await trx('playlists')
                .select('playlists.id')
                .where('playlists.type', '=', type as string)
                .where('playlists.name', '=', name as string);

            const playlist_id = playlistIdSelected[0].id;
            
            await trx('videos').insert({
                title,
                url,
                poster,
                playlist_id
            });
    
            await trx.commit();
    
            return response.status(201).send();
        }catch(err){
            console.log('video ja criado')
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }
    }
}