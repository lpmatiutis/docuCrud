import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {servicio_rc} from "./servicio_rc";


@Entity("parametro_servicio",{schema:"redcobrosjp" } )
export class parametro_servicio {

    @PrimaryGeneratedColumn()
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.parametroServicios,{ nullable:false, cascade: true,
        eager: true,})
    @JoinColumn({ name:'id_servicio'})
    id_servicio:servicio_rc | null;


    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"clave"
        })
    clave:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:150,
        name:"valor"
        })
    valor:string;
        
}
