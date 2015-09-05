/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    primerNombre: {   //Campo OBLIGATORIO
     type: 'string',
     size: 100,
     defaultsTo: 'NO ESPECIFICADO'
   },
   segundoNombre: {
     type: 'string',
     size: 100,
     defaultsTo: 'NO ESPECIFICADO'
   },
   primerApellido: {  //Campo OBLIGATORIO
     type: 'string',
     size: 100,
     defaultsTo: 'NO ESPECIFICADO'
   },
   segundoApellido: {
     type: 'string',
     size: 100,
     defaultsTo: 'NO ESPECIFICADO'
   },
   numDocumento: {
     type: 'string',
     size: 15,
     defaultsTo: 'NO ESPECIFICADO'
   },
   //--------CAMPOS DE AUDITORIA-----------------------
          _EmpresaOwner: {  // Empresa a la que petenece el registro
             type: "string",
             required: true,
             size: 45,
             defaultsTo: "0"
           },
          _Owner: {   //Usuario que crea el registro
            type: 'string',
            size: 45,
            defaultsTo: '0'
          },
          _UsuarioUpdate: {  //Usuario que modifica el registro
            type: 'string',
            size: 45,
            defaultsTo: '0'
          },
          _EstadoLogico: { //Estado logico del Registo [1] activo, [0] borrado logico
            type: 'string',
            size: 1,
            defaultsTo: '1'
          },

  }
};
