import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { localidad } from '../entity/localidad';
import {NextFunction, Request, Response} from "express";

export class LocalidadController {

    private localidadRepository = getRepository(localidad);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.localidadRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.localidadRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.localidadRepository.save(request.body);
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.localidadRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let localidadRemove = await this.localidadRepository.findOne(request.params.id);
        await this.localidadRepository.remove(localidadRemove);
    }

    async update(request: Request, response: Response, next: NextFunction){
        let localidadUpdate = await this.localidadRepository.findOne(request.params.id);
        await this.localidadRepository.save(localidadUpdate);
    }
}