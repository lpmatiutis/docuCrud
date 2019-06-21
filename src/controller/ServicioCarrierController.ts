import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { servicio_carrier } from '../entity/servicio_carrier';
import {NextFunction, Request, Response} from "express";

export class ServicioCarrierController {

    private servicioCarrierRepository = getRepository(servicio_carrier);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.servicioCarrierRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.servicioCarrierRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.servicioCarrierRepository.save(request.body);
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.servicioCarrierRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let servicioCarrierRemove = await this.servicioCarrierRepository.findOne(request.params.id);
        await this.servicioCarrierRepository.remove(servicioCarrierRemove);
    }

    async update(request: Request, response: Response, next: NextFunction){
        let servicioCarrierUpdate = await this.servicioCarrierRepository.findOne(request.params.id);
        await this.servicioCarrierRepository.save(servicioCarrierUpdate);
    }
}