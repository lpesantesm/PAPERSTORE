/**
 * api/responses/badPass.js
 *
 * This will be available in controllers as res.myResponse('foo');
 */

module.exports = function(message) {

  var req = this.req;
  var res = this.res;

  //var viewFilePath = 'mySpecialView';
  var statusCode = 1010;
  if (!message) {
    message = "Contraseña incorrecta.";
  }

  var result = {
    status: statusCode,
    message: message
  };

  // Optional message
  //if (message) {
    //result.message = message;
  //}

  // If the user-agent wants a JSON response, send json
  if (req.wantsJSON) {
    return res.status(result.status).json(result.message);
  }

  // Set status code and view locals
  res.status(result.status);
  for (var key in result) {
    res.locals[key] = result[key];
  }
  // And render view
  // res.render(viewFilePath, result, function(err) {
  //   // If the view doesn't exist, or an error occured, send json
  //   if (err) {
  //     return res.json(result, result.status);
  //   }
  //
  //   // Otherwise, serve the `views/mySpecialView.*` page
  //   //res.render(viewFilePath);
  // });
};
