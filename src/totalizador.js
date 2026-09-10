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

function Descuento(precio) {
  let descuento = 0;
  if (precio >= 1000) {
    descuento = 0.03;
  }
  if (precio >= 3000) {
    descuento = 0.05;
  }
  if (precio >= 7000) {
    descuento = 0.07;
  }
  if (precio >= 10000) {
    descuento = 0.1;
  }
  if (precio >= 30000) {
    descuento = 0.15;
  }

  return Math.round(precio * descuento);;
}

export { PrecioNeto, ListaEstados, ImpuestoAplicado, Descuento };