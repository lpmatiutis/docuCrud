import {getManager, UpdateResult, DeleteResult, getRepository} from 'typeorm';
import { facturador } from '../entity/facturador';
import {NextFunction, Request, Response} from "express";

export class FacturadorController {

    private facturadorRepository = getRepository(facturador);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.facturadorRepository.find();
    }

    async getLastId(request: Request, response: Response, next: NextFunction){
        const query= this.facturadorRepository.createQueryBuilder("facturador")
        .select("MAX(id_facturador)", "max");
        return query.getRawOne();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.facturadorRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.facturadorRepository.save(request.body);
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.facturadorRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let facturadorRemove = await this.facturadorRepository.findOne(request.params.id);
        await this.facturadorRepository.remove(facturadorRemove);
    }

    async update(request: Request, response: Response, next: NextFunction){
        let facturadorUpdate = await this.facturadorRepository.findOne(request.params.id);
        await this.facturadorRepository.save(facturadorUpdate);
    }
}