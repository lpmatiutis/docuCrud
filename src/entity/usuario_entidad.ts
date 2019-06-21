import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {entidad} from "./entidad";


@Entity("usuario_entidad",{schema:"redcobrosjp" } )
@Index("usuario_entidad_gestion_key",["gestion",],{unique:true})
export class usuario_entidad {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:30,
        name:"usuario"
        })
    usuario:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"password"
        })
    password:string;
        

    @PrimaryGeneratedColumn()
    @ManyToOne(type=>entidad, entidad=>entidad.usuarioEntidads,{ nullable:false, })
    @JoinColumn({ name:'id_entidad'})
    idEntidad:entidad | null;


    @Column("bigint",{ 
        nullable:true,
        name:"gestion"
        })
    gestion:string | null;
        
}
