/**
 * Usage:
 *
 * ```
 * res.emailAddressInUse();
 * ```
 *
 */

module.exports = function errorServidor (){

  // Get access to `res`
  // (since the arguments are up to us)
  var res = this.res;

  return res.send(500, sails.__('Error en el servidor, por favor intente más tarde.'));
};
