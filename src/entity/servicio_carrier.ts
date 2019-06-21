import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";
import {tipo_operacion} from "./tipo_operacion";
//import {detalle_en_linea} from "./detalle_en_linea";


@Entity("servicio_carrier",{schema:"redcobrosjp" } )
export class servicio_carrier {

    @Column("smallint",{ 
        nullable:false,
        name:"id_servicio_carrier"
        })
    id_servicio_carrier:number;
        

    @PrimaryGeneratedColumn()
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.servicioCarriers,{  nullable:false, cascade: true,
        eager: true,})
    @JoinColumn({ name:'id_servicio'})
    id_servicio:servicio_rc | null;


    @Column("character varying",{ 
        nullable:false,
        length:30,
        name:"descripcion"
        })
    descripcion:string;
        

    @PrimaryGeneratedColumn()
    @ManyToOne(type=>tipo_operacion, tipo_operacion=>tipo_operacion.servicioCarriers,{  nullable:false, })
    @JoinColumn({ name:'id_tipo_operacion'})
    id_tipo_operacion:tipo_operacion | null;


   
    // @OneToMany(type=>detalle_en_linea, detalle_en_linea=>detalle_en_linea.idServicio)
    // detalleEnLineas:detalle_en_linea[];
    

   
    // @OneToMany(type=>detalle_en_linea, detalle_en_linea=>detalle_en_linea.idTipoOperacion)
    // detalleEnLineas2:detalle_en_linea[];
    
}
