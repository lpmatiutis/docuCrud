import { EntidadController } from './controller/EntidadController';
import { LocalidadController } from './controller/LocalidadController';
import { FacturadorController } from './controller/FacturadorController';
import { ParametroServicioController } from './controller/ParametroServicioController';
import { RespuestaCarrierController } from './controller/RespuestaCarrierController';
import { RuteoServicioController } from './controller/RuteoServicioController';
import { ServicioCarrierController } from './controller/ServicioCarrierController';
import { ServicioRcController } from './controller/ServicioRcController';
import { TipoOperacionController } from './controller/TipoOperacionController';

export const Routes = [
{
    method: "get",
    route: "/entidad",
    controller: EntidadController,
    action: "all"
},
{
    method: "get",
    route: "/entidadLast",
    controller: EntidadController,
    action: "getLastId"
},
{
    method: "get",
    route: "/entidad/:id",
    controller: EntidadController,
    action: "one"
},
{
    method: "post",
    route: "/entidad",
    controller: EntidadController,
    action: "save"
},
{
    method: "delete",
    route: "/entidad/:id",
    controller: EntidadController,
    action: "remove"
},
{
    method: "put",
    route: "/entidad/:id",
    controller: EntidadController,
    action: "update"
},

{
    method: "get",
    route: "/facturadorLast",
    controller: FacturadorController,
    action: "getLastId"
},
{
    method: "get",
    route: "/facturador",
    controller: FacturadorController,
    action: "all"
},
{
    method: "get",
    route: "/facturador/:id",
    controller: FacturadorController,
    action: "one"
},
{
    method: "post",
    route: "/facturador",
    controller: FacturadorController,
    action: "save"
},
{
    method: "delete",
    route: "/facturador/:id",
    controller: FacturadorController,
    action: "remove"
},
{
    method: "put",
    route: "/facturador/:id",
    controller: FacturadorController,
    action: "update"
},

{
    method: "get",
    route: "/localidad",
    controller: LocalidadController,
    action: "all"
},
{
    method: "get",
    route: "/localidad/:id",
    controller: LocalidadController,
    action: "one"
},
{
    method: "post",
    route: "/localidad",
    controller: LocalidadController,
    action: "save"
},
{
    method: "delete",
    route: "/localidad/:id",
    controller: LocalidadController,
    action: "remove"
},
{
    method: "put",
    route: "/localidad/:id",
    controller: LocalidadController,
    action: "update"
},

{
    method: "get",
    route: "/parametroservicio",
    controller: ParametroServicioController,
    action: "all"
},
{
    method: "get",
    route: "/parametroservicio/:id",
    controller: ParametroServicioController,
    action: "one"
},
{
    method: "post",
    route: "/parametroservicio",
    controller: ParametroServicioController,
    action: "save"
},
{
    method: "delete",
    route: "/parametroservicio/:id",
    controller: ParametroServicioController,
    action: "remove"
},
{
    method: "put",
    route: "/parametroservicio/:id",
    controller: ParametroServicioController,
    action: "update"
},

{
    method: "get",
    route: "/respuestacarrier",
    controller: RespuestaCarrierController,
    action: "all"
},
{
    method: "get",
    route: "/respuestacarrier/:id",
    controller: RespuestaCarrierController,
    action: "one"
},
{
    method: "post",
    route: "/respuestacarrier",
    controller: RespuestaCarrierController,
    action: "save"
},
{
    method: "delete",
    route: "/respuestacarrier/:id",
    controller: RespuestaCarrierController,
    action: "remove"
},
{
    method: "put",
    route: "/respuestacarrier/:id",
    controller: RespuestaCarrierController,
    action: "update"
},

{
    method: "get",
    route: "/ruteoservicio",
    controller: RuteoServicioController,
    action: "all"
},
{
    method: "get",
    route: "/ruteoservicio/:id",
    controller: RuteoServicioController,
    action: "one"
},
{
    method: "post",
    route: "/ruteoservicio",
    controller: RuteoServicioController,
    action: "save"
},
{
    method: "delete",
    route: "/ruteoservicio/:id",
    controller: RuteoServicioController,
    action: "remove"
},
{
    method: "put",
    route: "/ruteoservicio/:id",
    controller: RuteoServicioController,
    action: "update"
},

{
    method: "get",
    route: "/serviciocarrier",
    controller: ServicioCarrierController,
    action: "all"
},
{
    method: "get",
    route: "/serviciocarrier/:id",
    controller: ServicioCarrierController,
    action: "one"
},
{
    method: "post",
    route: "/serviciocarrier",
    controller: ServicioCarrierController,
    action: "save"
},
{
    method: "delete",
    route: "/serviciocarrier/:id",
    controller: ServicioCarrierController,
    action: "remove"
},
{
    method: "put",
    route: "/serviciocarrier/:id",
    controller: ServicioCarrierController,
    action: "update"
},

{
    method: "get",
    route: "/serviciorc",
    controller: ServicioRcController,
    action: "all"
},
{
    method: "get",
    route: "/serviciorc/:id",
    controller: ServicioRcController,
    action: "one"
},
{
    method: "post",
    route: "/serviciorc",
    controller: ServicioRcController,
    action: "save"
},
{
    method: "delete",
    route: "/serviciorc/:id",
    controller: ServicioRcController,
    action: "remove"
},
{
    method: "put",
    route: "/serviciorc/:id",
    controller: ServicioRcController,
    action: "update"
},

{
    method: "get",
    route: "/tipooperacion",
    controller: TipoOperacionController,
    action: "all"
},
{
    method: "get",
    route: "/tipooperacion/:id",
    controller: TipoOperacionController,
    action: "one"
},
{
    method: "post",
    route: "/tipooperacion",
    controller: TipoOperacionController,
    action: "save"
},
{
    method: "delete",
    route: "/tipooperacion/:id",
    controller: TipoOperacionController,
    action: "remove"
},
{
    method: "put",
    route: "/tipooperacion/:id",
    controller: TipoOperacionController,
    action: "update"
},

];