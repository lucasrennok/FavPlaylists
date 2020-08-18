import {Request, Response} from 'express';

import db from '../database/connection';

export default class TypeController{
    async index(request: Request, response: Response){
        const filters = request.query;
        return response.json({});
    }
    
    async create(request: Request, response: Response) {
        const{
            type
        } = request.body;

        const trx = await db.transaction();
        try{
            await trx('type').insert({
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