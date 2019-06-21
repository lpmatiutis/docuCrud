import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";


@Entity("respuesta_carrier",{schema:"redcobrosjp" } )
export class respuesta_carrier {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:10,
        name:"id_respuesta_carrier"
        })
    id_respuesta_carrier:string;
        

    @PrimaryGeneratedColumn()
    @ManyToOne(type=>facturador, facturador=>facturador.respuestaCarriers,{ nullable:false, cascade: true,
        eager: true,})
    @JoinColumn({ name:'id_facturador'})
    id_facturador:facturador | null;


    @Column("character",{ 
        nullable:false,
        name:"aprobado"
        })
    aprobado:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:50,
        name:"descripcion"
        })
    descripcion:string;
        
}
