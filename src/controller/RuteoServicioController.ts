import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { ruteo_servicio } from '../entity/ruteo_servicio';
import {NextFunction, Request, Response} from "express";

export class RuteoServicioController {

    private ruteoServicioRepository = getRepository(ruteo_servicio);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.ruteoServicioRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.ruteoServicioRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.ruteoServicioRepository.save(request.body);
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.ruteoServicioRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let ruteoServicioRemove = await this.ruteoServicioRepository.findOne(request.params.id);
        await this.ruteoServicioRepository.remove(ruteoServicioRemove);
    }

    async update(request: Request, response: Response, next: NextFunction){
        let ruteoServicioUpdate = await this.ruteoServicioRepository.findOne(request.params.id);
        await this.ruteoServicioRepository.save(ruteoServicioUpdate);
    }
}