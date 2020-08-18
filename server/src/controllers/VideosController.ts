import {Request, Response} from 'express';

import db from '../database/connection';

export default class VideosController{
    async getVideosFromPlaylist(request: Request, response: Response){
        const {type, playlist} = request.query;
        
        const playlistIdSelected = await db('playlists')
            .select('playlists.id')
            .where('playlists.type', '=', type as string)
            .where('playlists.name', '=', playlist as string);

        const videosList = await db('videos')
            .select('videos.title', 'videos.url', 'videos.poster')
            .where('videos.playlist_id','=',playlistIdSelected[0].id)

        console.log(videosList)

        return response.json(videosList);
    }
    
    async create(request: Request, response: Response) {
        const{
            title,
            url,
            poster,
            type,
            playlist
        } = request.body;

        const trx = await db.transaction();
        try{
            const playlistIdSelected = await trx('playlists')
                .select('playlists.id')
                .where('playlists.type', '=', type as string)
                .where('playlists.name', '=', playlist as string);

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
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }
    }
}