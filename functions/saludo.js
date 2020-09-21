exports.handler = async event => {
  const nombre = event.queryStringParameters.nombre;
  return {
    statusCode: 200,
    body: `Hola ${nombre}.`
  };
}
