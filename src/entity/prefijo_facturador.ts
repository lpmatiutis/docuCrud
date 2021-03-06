import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";


@Entity("prefijo_facturador",{schema:"redcobrosjp" } )
export class prefijo_facturador {

    @Column("character varying",{ 
        nullable:false,
        primary:true,
        length:5,
        name:"id_prefijo"
        })
    id_prefijo:string;
        

   
    @ManyToOne(type=>facturador, facturador=>facturador.prefijoFacturadors,{  nullable:false, })
    @JoinColumn({ name:'id_facturador'})
    idFacturador:facturador | null;

}
