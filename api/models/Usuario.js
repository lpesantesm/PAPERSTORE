/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    primerNombre: {
     type: 'string',
     size: 100,
     required: true
   },
   primerApellido: {
     size: 100,
     type: 'string',
     required: true
   },
   codigoUsuario: {
     type: 'string',
     size: 15,
     required: true
   },
   claveUsuario: {
     type: 'string',
     size: 15,
     required: true
   },
   email: {
     type: 'string',
     size: 50,
     required: true
   },

   //--------CAMPOS DE AUDITORIA-----------------------
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
