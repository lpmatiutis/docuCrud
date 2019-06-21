import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {persona} from "./persona";
import {localidad} from "./localidad";
import {recaudador} from "./recaudador";
// import {configuracion_comisional} from "./configuracion_comisional";
// import {distribucion_clearing} from "./distribucion_clearing";
// import {filtro_servicio} from "./filtro_servicio";
// import {informacion} from "./informacion";


@Entity("sucursal",{schema:"redcobrosjp" } )
@Index("sucursal_recaudador_idx",["recaudador",])
export class sucursal {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id_sucursal"
        })
    id_sucursal:string;
        

    @Column("bigint",{ 
        nullable:true,
        name:"codigo_sucursal"
        })
    codigo_sucursal:string | null;
        

    @Column("bigint",{ 
        nullable:true,
        name:"codigo_sucursal_set"
        })
    codigo_sucursal_set:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"descripcion"
        })
    descripcion:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"direccion"
        })
    direccion:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"numero_cuenta"
        })
    numero_cuenta:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"telefono"
        })
    telefono:string;
        

   
    @ManyToOne(type=>persona, persona=>persona.sucursals,{  })
    @JoinColumn({ name:'contacto'})
    contacto:persona | null;


   
    @ManyToOne(type=>localidad, localidad=>localidad.sucursals,{  nullable:false, })
    @JoinColumn({ name:'localidad'})
    localidad:localidad | null;


   
    @ManyToOne(type=>recaudador, recaudador=>recaudador.sucursals,{  nullable:false, })
    @JoinColumn({ name:'recaudador'})
    recaudador:recaudador | null;


    @Column("bigint",{ 
        nullable:true,
        name:"zona"
        })
    zona:string | null;
        

    @Column("character",{ 
        nullable:false,
        default: () => "'N'",
        name:"es_tigo"
        })
    es_tigo:string;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:10,
        name:"latitud"
        })
    latitud:string | null;
        

    @Column("numeric",{ 
        nullable:true,
        precision:19,
        scale:10,
        name:"longitud"
        })
    longitud:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"rubro"
        })
    rubro:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"ref_ubicacion"
        })
    ref_ubicacion:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"barrio"
        })
    barrio:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"otras_redes"
        })
    otras_redes:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"atencion_lun_vier"
        })
    atencion_lun_vier:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"atencion_sab"
        })
    atencion_sab:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"atencion_dom"
        })
    atencion_dom:string | null;
        

    @Column("character",{ 
        nullable:true,
        name:"carteleria"
        })
    carteleria:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"sitio_web"
        })
    sitio_web:string | null;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"redes_sociales"
        })
    redes_sociales:string | null;
        

   
    // @OneToMany(type=>configuracion_comisional, configuracion_comisional=>configuracion_comisional.sucursal)
    // configuracionComisionals:configuracion_comisional[];
    

   
    // @OneToMany(type=>distribucion_clearing, distribucion_clearing=>distribucion_clearing.sucursal)
    // distribucionClearings:distribucion_clearing[];
    

   
    // @OneToMany(type=>filtro_servicio, filtro_servicio=>filtro_servicio.idSucursal)
    // filtroServicios:filtro_servicio[];
    

   
    // @OneToMany(type=>informacion, informacion=>informacion.sucursal)
    // informacions:informacion[];
    
}
