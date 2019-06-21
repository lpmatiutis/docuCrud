import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {entidad} from "./entidad";
import {red} from "./red";


@Entity("entidad_politica",{schema:"redcobrosjp" } )
export class entidad_politica {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_entidad_politica"
        })
    id_entidad_politica:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string;
        

   
    @ManyToOne(type=>entidad, entidad=>entidad.entidadPoliticas,{  nullable:false, })
    @JoinColumn({ name:'entidad'})
    entidad:entidad | null;


   
    // @ManyToOne(type=>red, red=>red.entidadPoliticas,{  nullable:false, })
    // @JoinColumn({ name:'red'})
    // red:red | null;

}
