exports.handler = function(event, context, callback) {
  const nombre = event.queryStringParameters.nombre;
    callback(null, {
    statusCode: 200,
    body: `Mola ${nombre}`
  });
}
