import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {ciudad} from "./ciudad";


@Entity("ciudad_ext",{schema:"redcobrosjp" } )
export class ciudad_ext {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"entidad"
        })
    entidad:string;
        

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_ciudad_ext"
        })
    id_ciudad_ext:string;
        

   
    @PrimaryGeneratedColumn()
    @ManyToOne(type=>ciudad, ciudad=>ciudad.ciudadExts,{ /*primary:true,*/ nullable:false, })
    @JoinColumn({ name:'id_ciudad_int'})
    idCiudadInt:ciudad | null;


    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        
}
