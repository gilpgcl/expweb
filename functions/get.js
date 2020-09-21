const axios = require('axios')
exports.handler = async event => {
  const URL = "https://firestore.googleapis.com/v1/projects/gilpgmp/databases/(default)/documents/mascota";
  const res = await axios.get(URL);
  return {
    statusCode: 200,
    body: respuesta
  };
}
