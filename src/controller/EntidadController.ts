import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { entidad } from '../entity/entidad';
import {NextFunction, Request, Response} from "express";

export class EntidadController {

    private entidadRepository = getRepository(entidad);

    async getLastId(request: Request, response: Response, next: NextFunction){
        const query= this.entidadRepository.createQueryBuilder("entidad")
        .select("MAX(id_entidad)", "max");
        //.from(entidad, "entidad")
        //.groupBy("id_localidad")
        //.getOne();
        return query.getRawOne();
    
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return this.entidadRepository.find()//.then( resp =>{
            //response.status(201).send('entidades encontradas' + resp);
        //});
    }

    async one(request: Request, response: Response, next: NextFunction) {
        console.log('procesando...');
        return this.entidadRepository.save(request.body).then( resp =>{
            response.status(201).send('entidad agregada' + resp);
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.entidadRepository.save(request.body);
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        console.log('procesando... edit');
        return this.entidadRepository.save(request.body).then( resp =>{
            response.status(201).send('entidad editada' + resp);
        });
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let entidadRemove = await this.entidadRepository.findOne(request.params.id);
        await this.entidadRepository.remove(entidadRemove);
    }

    async update(request: Request, response: Response, next: NextFunction){
        let entidadUpdate = await this.entidadRepository.findOne(request.params.id);
        await this.entidadRepository.save(entidadUpdate);
    }

}