import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { respuesta_carrier } from '../entity/respuesta_carrier';
import {NextFunction, Request, Response} from "express";

export class RespuestaCarrierController {

    private respuestaCarrierRepository = getRepository(respuesta_carrier);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.respuestaCarrierRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.respuestaCarrierRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.respuestaCarrierRepository.save(request.body);
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.respuestaCarrierRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let respuestaCarrierRemove = await this.respuestaCarrierRepository.findOne(request.params.id);
        await this.respuestaCarrierRepository.remove(respuestaCarrierRemove);
    }

    async update(request: Request, response: Response, next: NextFunction){
        let respuestaCarrierUpdate = await this.respuestaCarrierRepository.findOne(request.params.id);
        await this.respuestaCarrierRepository.save(respuestaCarrierUpdate);
    }
}

