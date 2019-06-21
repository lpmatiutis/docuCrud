import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {servicio_rc} from "./servicio_rc";
// import {dato_consulta} from "./dato_consulta";


@Entity("alias_servicio_facturador",{schema:"redcobrosjp" } )
export class alias_servicio_facturador {

    @PrimaryGeneratedColumn()
    @ManyToOne(type=>facturador, facturador=>facturador.aliasServicioFacturadors,{  nullable:false, })
    @JoinColumn({ name:'id_facturador'})
    idFacturador:facturador | null;


    @PrimaryGeneratedColumn()
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.aliasServicioFacturadors,{ nullable:false, })
    @JoinColumn({ name:'id_servicio'})
    idServicio:servicio_rc | null;


    @Column("integer",{ 
        nullable:false,
        name:"alias_servicio"
        })
    alias_servicio:number;
        

   
    // @OneToMany(type=>dato_consulta, dato_consulta=>dato_consulta.idFacturador)
    // datoConsultas:dato_consulta[];
    

   
    // @OneToMany(type=>dato_consulta, dato_consulta=>dato_consulta.idServicio)
    // datoConsultas2:dato_consulta[];
    
}
