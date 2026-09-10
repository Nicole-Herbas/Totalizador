function PrecioNeto(cantidad, precio) {
  return cantidad * precio;
}

function ListaEstados() {
  return ["Utah","Nevada","Texas", "Alabama","California"];
}

function ImpuestoAplicado(estado, precio) {
  let impuesto = 0;
  switch (estado) {
    case "Utah":
      impuesto = 0.0665;
      break;
    case "Nevada":
      impuesto = 0.08;
      break;
    case "Texas":
      impuesto = 0.0625;
      break;
    case "Alabama":
      impuesto = 0.04;
      break;
    case "California":
      impuesto = 0.0825;
      break;
  }
  return precio * impuesto;
}

export { PrecioNeto, ListaEstados, ImpuestoAplicado };