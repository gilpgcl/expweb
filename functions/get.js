exports.handler = async event => {
  const URL = "https://firestore.googleapis.com/v1/projects/gilpgmp/databases/(default)/documents/mascota";
  let respuesta = "";
  try {
    const resp = await fetch(URL);
    if (resp.ok) {
      respuesta = await resp.text();
    } else {
      respuesta = resp.statusText;
    }
  } catch (e) {
    console.log(e);
    respuesta = e.message;
  }
  return {
    statusCode: 200,
    body: respuesta
  };
}
