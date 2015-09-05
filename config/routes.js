/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  //'GET /': 'PageController.showHomePage',
  //'PUT /login': 'UsuarioController.login',
  //'GET /logout': 'UsuarioController.logout',
  /*'/': {
    view: 'homepage'
  }*/

  //PRIVATE METODOS:  Aqui se declaran los metodos basicos de cada modelo
      //MODELO prospectos
          'POST /prospecto/ingresar'        : 'ProspectoController.IngresarRegistroProspecto',
          'POST /prospecto/buscar'          : 'ProspectoController.BuscarRegistroProspecto',
          'POST /prospecto/proximo_estado'  : 'ProspectoController.BuscarEstadoProspecto',


          'POST /prospecto/json'            : 'GestionProspectoController.GeneraJsonProspecto',

          'POST /prospecto/adicionar'       : 'GestionProspectoController.IngresarProspecto',
          'POST /prospecto/actualizaid'     : 'GestionProspectoController.ActualizaProspectoPorID',
          'POST /prospecto/cambiaestado'    : 'GestionProspectoController.CambioEstadoProspecto',
          'POST /prospecto/buscarid'        : 'GestionProspectoController.BuscaProspectoPorID',
          'POST /prospecto/buscar'          : 'GestionProspectoController.BuscaProspecto',



      //MODELO cliente
           'POST /cliente/ingresar'        : 'ClienteController.IngresarRegistroCliente',
           //'POST /cliente/buscar'          : 'ClienteController.BuscarRegistroCliente',
           'POST /cliente/proximo_estado'  : 'ClienteController.BuscarEstadoCliente',


           'POST /cliente/json'            : 'GestionClienteController.GeneraJsonCliente',

           'POST /cliente/adicionar'       : 'GestionClienteController.IngresarCliente',
           'POST /cliente/actualizaid'     : 'GestionClienteController.ActualizaClientePorID',
           'POST /cliente/cambiaestado'    : 'GestionClienteController.CambioEstadoCliente',
           'POST /cliente/buscarid'        : 'GestionClienteController.BuscaClientePorID',
           'POST /cliente/busqueda'        : 'GestionClienteController.BuscaCliente',
    //MODELO DEPENDIENTE
           'POST /dependiente/ingresar'    : 'DependienteController.IngresaDependiente',
           'POST /dependiente/actualizar'  : 'DependienteController.ActualizacionDependiente',
           'POST /dependiente/eliminar'    : 'DependienteController.EliminaDependiente',

    //MODELO COTIZACION
           'POST /cotizacion/ingresar'    :  'CotizacionController.IngresoCotizacion',

     //MODELO visista
           'POST /visita/adicionar'       : 'GestionVisitaController.IngresarVisita',
           'POST /visita/actualizaid'     : 'GestionVisitaController.ActualizaVisitaPorID',
           //'POST /cliente/cambiaestado'   : 'GestionVisitaController.CambioEstadoVisita',
           'POST /visita/buscarid'        : 'GestionVisitaController.BuscaVisitaPorID',
           'POST /visita/busqueda'        : 'GestionVisitaController.BuscaVisita',


//MODELO cotizacion
        //   'POST /cotizacion/ingresar'     : 'CotizacionController.IngresaRegistroCotizacion',



      //MODELO mgacrm
           'POST /mgacrm/buscar'       : 'MgaCrmController.BuscarRegistroMGACRM',



  //PUBLIC METODOS: Aqui se declaran los metodos definidos como servicio.

         'POST /menuCRM/test'    : 'MenuCRMController.menuPrincipal',



  //VISTAS
    '/': {
      view: 'module_crm/index'
    },
    '/prospectos': {
      view: 'module_crm/crm_prospecto'
      //controller: "PROSPECTOController", action:"listar"
    },
    '/prospectosIngreso': {
      view: 'module_crm/crm_prospectoIngreso'
      //controller: "PROSPECTOController", action:"listar"
    },
    '/prospectosEdicion': {
      view: 'module_crm/crm_prospectoEdicion'
      //controller: "PROSPECTOController", action:"listar"
    },
    '/prospectosBusqueda': {
      view: 'module_crm/crm_prospectoBusqueda'
      //controller: "PROSPECTOController", action:"listar"
    },
    '/prospectosReporte': {
      view: 'module_crm/crm_prospectoReporte'
      //controller: "PROSPECTOController", action:"listar"
    },
    '/agenda': {
      view: 'module_crm/crm_agenda'
    },
    '/programacion': {
      view: 'module_crm/crm_programacion'
    },
    '/reportes': {
      view: 'module_crm/crm_reportes'
    },
    '/canales': {
      view: 'module_crm/crm_canales'
    },
    '/reasignacion': {
      view: 'module_crm/crm_reasignacion'
    }


  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
