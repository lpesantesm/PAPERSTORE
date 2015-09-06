

module.exports = {


  create: function(usuarioIn, cb) {

            //RESTRICCION DE USO: comp* deben ser true
            var  comp1= usuarioIn._Owner && usuarioIn.primerNombre && usuarioIn.primerApellido && usuarioIn.codigoUsuario && usuarioIn.claveUsuario && usuarioIn.email;
            //----------------------------------------------------

                if (comp1) {
                                // Campos que se excluye en la Creacion
                                if (usuarioIn._EstadoLogico)
                                        delete usuarioIn._EstadoLogico;

                                Usuario.create(usuarioIn).exec(function UsuarioCreate(err, usuarioNuevo){
                                  if (err) return  cb(err, null);
                                      var resultados;
                                      if(usuarioNuevo){
                                                resultados={
                                                            resultado: 'Ok',
                                                            mensaje  : sails.__('Se ingresó usuario correctamente.'),
                                                            usuario: usuarioNuevo
                                                            };
                                      }else{
                                        resultados={
                                                    resultado: null,
                                                    mensaje  : sails.__('El ingresó del usuario no se efectuo.'),
                                                    usuario: null
                                                    };
                                      }

                                      cb(null, resultados);
                                });

                }else{

                  var resultados={
                                  resultado: null,
                                  mensaje  : sails.__('Faltan datos obligatorios para ingresar un usuario.'),
                                  prospecto: null
                                 };

                  cb(null, resultados);

               }

        }
 }
