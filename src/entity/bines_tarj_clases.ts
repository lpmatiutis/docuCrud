import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
 import {servicio_rc} from "./servicio_rc";


@Entity("bines_tarj_clases",{schema:"redcobrosjp" } )
export class bines_tarj_clases {

    @Column("bigint",{ 
        nullable:true,
        name:"bin"
        })
    bin:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:2,
        name:"clase"
        })
    clase:string;
        

    @PrimaryGeneratedColumn()
    @ManyToOne(type=>servicio_rc, servicio_rc=>servicio_rc.binesTarjClasess,{ /*primary:true,*/ nullable:false, })
    @JoinColumn({ name:'servicio'})
    servicio:servicio_rc | null;

}
