import {Request, Response} from 'express';

import db from '../database/connection';

export default class TypeController{
    async index(request: Request, response: Response){
        const filters = request.query;

        return response.json({});
    }
    
    async create(request: Request, response: Response) {
        
        return response.json({});
    }
}