import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { servicio_rc } from '../entity/servicio_rc';
import {NextFunction, Request, Response} from "express";

export class ServicioRcController {

    private servicioRcRepository = getRepository(servicio_rc);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.servicioRcRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.servicioRcRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.servicioRcRepository.save(request.body);
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.servicioRcRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let servicioRcRemove = await this.servicioRcRepository.findOne(request.params.id);
        await this.servicioRcRepository.remove(servicioRcRemove);
    }

    async update(request: Request, response: Response, next: NextFunction){
        let servicioRcUpdate = await this.servicioRcRepository.findOne(request.params.id);
        await this.servicioRcRepository.save(servicioRcUpdate);
    }
}