import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
 import {servicio_rc} from "./servicio_rc";


@Entity("bines_tarjetas",{schema:"redcobrosjp" } )
export class bines_tarjetas {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"bin"
        })
    bin:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:40,
        name:"descripcion"
        })
    descripcion:string;
        

   
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.binesTarjetass,{  })
    @JoinColumn({ name:'servicio_rc'})
    servicioRc:servicio_rc | null;

}
