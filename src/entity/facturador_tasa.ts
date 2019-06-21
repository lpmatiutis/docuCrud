import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";
import {moneda} from "./moneda";


@Entity("facturador_tasa",{schema:"redcobrosjp" } )
export class facturador_tasa {

    @PrimaryGeneratedColumn()
    @ManyToOne(type=>facturador, facturador=>facturador.facturadorTasas,{ nullable:false, })
    @JoinColumn({ name:'facturador'})
    facturador:facturador | null;


    @PrimaryGeneratedColumn()
    @ManyToOne(type=>moneda, moneda=>moneda.facturadorTasas,{ nullable:false, })
    @JoinColumn({ name:'moneda'})
    moneda:moneda | null;


    @Column("integer",{ 
        nullable:false,
        name:"tasa"
        })
    tasa:number;
        
}
