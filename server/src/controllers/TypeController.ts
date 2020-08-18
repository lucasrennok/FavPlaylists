import {Request, Response} from 'express';

import db from '../database/connection';

export default class TypeController{
    async getAllTypes(request: Request, response: Response){
        const allTypesSelected = await db('playlist_types')
            .select('type');

        let vector = []
        for(let i=0; i<allTypesSelected.length; i++){
            vector[i] = allTypesSelected[i].type;
        }
        console.log({"types": vector});
        return response.json({"types": vector});
    }
    
    async create(request: Request, response: Response) {
        const{
            type
        } = request.body;

        const trx = await db.transaction();
        try{
            await trx('playlist_types').insert({
                type
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