/**
 * Usage:
 *
 * ```
 * res.emailAddressInUse();
 * ```
 *
 */

module.exports = function emailAddressInUse (){

  // Get access to `res`
  // (since the arguments are up to us)
  var res = this.res;

  return res.send(409, sails.__('El correo electrónico ya existe.'));
};
