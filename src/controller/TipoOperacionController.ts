import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { tipo_operacion } from '../entity/tipo_operacion';
import {NextFunction, Request, Response} from "express";

export class TipoOperacionController {

    private tipoOperacionRepository = getRepository(tipo_operacion);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.tipoOperacionRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.tipoOperacionRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.tipoOperacionRepository.save(request.body);
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.tipoOperacionRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let tipoOperacionRemove = await this.tipoOperacionRepository.findOne(request.params.id);
        await this.tipoOperacionRepository.remove(tipoOperacionRemove);
    }

    async update(request: Request, response: Response, next: NextFunction){
        let tipoOperacionUpdate = await this.tipoOperacionRepository.findOne(request.params.id);
        await this.tipoOperacionRepository.save(tipoOperacionUpdate);
    }
}