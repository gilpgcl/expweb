async function saluda() {
  try {
    // @ts-ignore
    const nombre = inNombre.value;
    /** @type {import("../js/Saludo").Saludo} */
    const saludo = new ProxySaludo();
    const respuesta = await saludo.saluda(nombre);
    // @ts-ignore
    outSaludo.value = respuesta;
  } catch (e) {
    console.log(e);
    alert(e.message);
  }
}