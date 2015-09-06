/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	GeneraJsonUsuario: function(req, res) {
    var data_from_client = req.params.all();

		var usuario=    {
													primerNombre: 'LUIS',
													primerApellido:  'PESANTES',
													codigoUsuario: 'LPESANTES',
													claveUsuario: 'KK12457P',
													email: 'LPESANTESM@GMAIL.COM',
													_EmpresaOwner: 'uuuuuuuuuuuuuuuuuuuuuuu',
													_Owner: 'XXXXXXXXXXXXXXXXXXXXXXXX'
										};

									UsuarioService.create(usuario,function(e, nuevoUsuario){
																	if (e) return res.ok(e);
																	var resultados={
  																									resultado: 'Ok',
																									  mensaje  : sails.__('Se ingresó usuario correctamente'),
																										usuario: nuevoUsuario
																								 };
																	return res.ok(resultados);
														     });
	 },


};
