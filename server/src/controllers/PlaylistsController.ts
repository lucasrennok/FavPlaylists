import {Request, Response} from 'express';

import db from '../database/connection';

export default class PlaylistsController{
    async getIdFromTypeAndPlaylist(request: Request, response: Response){
        const {type, playlist} = request.query;
        
        const playlistIdSelected = await db('playlists')
            .select('playlists.id')
            .where('playlists.type', '=', type as string)
            .where('playlists.name', '=', playlist as string);

        console.log(playlistIdSelected[0]);
        return response.json(playlistIdSelected[0]);
    }

    async getPlaylistNames(request: Request, response: Response){
        const {type} = request.query;
        
        const playlistSelected = await db('playlists')
            .select('playlists.name')
            .where('playlists.type', '=', type as string);
            
        let vector = []
        for(let i=0; i<playlistSelected.length; i++){
            vector[i] = playlistSelected[i].name;
        }
        console.log({"playlists_names": vector});
        return response.json({"playlists_names": vector});
    }
    
    async create(request: Request, response: Response) {
        const{
            type,
            name
        } = request.body;

        const idSelected = await db('playlists').max('id');
        let id = idSelected[0]['max(`id`)']+1;
        
        if(typeof id!=='number' || id===undefined){
            id = 1;
        }

        const trx = await db.transaction();
        try{
            await trx('playlists').insert({
                type,
                name,
                id
            });
    
            await trx.commit();
    
            return response.status(201).send();
        }catch(err){
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }
    }
}