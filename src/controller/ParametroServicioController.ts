import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { parametro_servicio } from '../entity/parametro_servicio';
import {NextFunction, Request, Response} from "express";

export class ParametroServicioController {

    private parametroServicioRepository = getRepository(parametro_servicio);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.parametroServicioRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.parametroServicioRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.parametroServicioRepository.save(request.body);
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.parametroServicioRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let parametroSerivioRemove = await this.parametroServicioRepository.findOne(request.params.id);
        await this.parametroServicioRepository.remove(parametroSerivioRemove);
    }

    async update(request: Request, response: Response, next: NextFunction){
        let parametroServicioUpdate = await this.parametroServicioRepository.findOne(request.params.id);
        await this.parametroServicioRepository.save(parametroServicioUpdate);
    }
}