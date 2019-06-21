import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {red} from "./red";


@Entity("habilitacion_fact_red",{schema:"redcobrosjp" } )
export class habilitacion_fact_red {

    @PrimaryGeneratedColumn()
    @ManyToOne(type=>facturador, facturador=>facturador.habilitacionFactReds,{  nullable:false, })
    @JoinColumn({ name:'facturador'})
    facturador:facturador | null;


    @PrimaryGeneratedColumn()
    @ManyToOne(type=>red, red=>red.habilitacionFactReds,{ nullable:false, })
    @JoinColumn({ name:'red'})
    red:red | null;


    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string;
        
}
