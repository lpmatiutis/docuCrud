import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {facturador} from "./facturador";


@Entity("ruteo_servicio",{schema:"redcobrosjp" } )
export class ruteo_servicio {

    @PrimaryGeneratedColumn()
    @OneToOne(type=>facturador, facturador=>facturador.ruteoServicio,{ nullable:false, cascade: true,
        eager: true,})
    @JoinColumn({ name:'id_facturador'})
    id_facturador:facturador | null;


    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"url_host"
        })
    url_host:string;
        

    @Column("integer",{ 
        nullable:true,
        default: () => "0",
        name:"puerto"
        })
    puerto:number | null;
        

    @Column("smallint",{ 
        nullable:false,
        name:"conexion_to"
        })
    conexion_to:number;
        

    @Column("integer",{ 
        nullable:false,
        name:"read_to"
        })
    read_to:number;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'S'",
        name:"guardar_mensajes"
        })
    guardar_mensajes:string;
        
}
