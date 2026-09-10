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

function MensajeError(cantidad, precio, estado) {
  if (cantidad === "" || precio === "" || estado === "") {
    return "Por favor, complete todos los campos";
  }

  return "";
}

function MensajeInvalido(cantidad, precio) {
  if (cantidad === 0) {
    return "La cantidad de items no puede ser cero";
  }
  if (precio === 0) {
    return "El precio unitario no puede ser cero";
  }
  if (cantidad < 0) {
    return "La cantidad de items debe ser un número positivo";
  }
  if (precio < 0) {
    return "El precio unitario debe ser un número positivo";
  }

  return "";
}

function PrecioTotal(cantidad, precio, estado, categoria) {
  const neto = PrecioNeto(cantidad, precio);
  const impuesto = ImpuestoAplicado(estado, neto);
  const impuestoCategoria = ImpuestoCategoria(categoria, neto);
  const descuento = Descuento(neto);
  return neto + impuesto + impuestoCategoria - descuento;
}

function ListaCategoria() {
  return ["Alimentos","Bebidas alcohólicas","Material de escritorio", "Muebles","Electrónicos","Vestimenta","Varios"];
}

function ImpuestoCategoria(categoria, precio) {
  let impuesto = 0;
  switch (categoria) {
    case "Alimentos":
      impuesto = 0;
      break;
    case "Bebidas alcohólicas":
      impuesto = 0.07;
      break;
    case "Material de escritorio":
      impuesto = 0;
      break;
    case "Muebles":
      impuesto = 0.03;
      break;
    case "Electrónicos":
      impuesto = 0.04;
      break;
    case "Vestimenta":
      impuesto = 0.02;
      break;
    case "Varios":
      impuesto = 0;
      break;
  }
  return Math.round(precio * impuesto * 100) / 100;
}

function DescuentoCategoria(categoria, precio) {
  let descuento = 0;
  switch (categoria) {
    case "Alimentos":
      descuento = 0.02;
      break;
    case "Bebidas alcohólicas":
      descuento = 0;
      break;
    case "Material de escritorio":
      descuento = 0.015;
      break;
    case "Muebles":
      descuento = 0;
      break;
    case "Electrónicos":
      descuento = 0.01;
      break;
    case "Vestimenta":
      descuento = 0;
      break;
    case "Varios":
      descuento = 0;
      break;
  }
  return Math.round(precio * descuento * 100) / 100;
}

function CostoEnvio(pesoVolumetrico, cantidad) {
  let costo = 0;
  if (pesoVolumetrico > 10 && pesoVolumetrico <= 20) {
    costo = 3.5 * cantidad;
  } else if (pesoVolumetrico > 20 && pesoVolumetrico <= 40) {
    costo = 5 * cantidad;
  } else if (pesoVolumetrico > 40 && pesoVolumetrico <= 80) {
    costo = 6 * cantidad;
  } else if (pesoVolumetrico > 80 && pesoVolumetrico <= 100) {
    costo = 6.5 * cantidad;
  } else if (pesoVolumetrico > 100 && pesoVolumetrico <= 200) {
    costo = 8 * cantidad;
  } else if (pesoVolumetrico > 200) {
    costo = 9 * cantidad;
  }
  return costo;
}

function ListaTipoCliente() {
  return ["Normal", "Recurrente", "Antiguo Recurrente", "Especial"];
}

function TipoCliente(valor, tipo) {
  let tarifa = 0;
  switch (tipo) {
    case "Normal":
      tarifa = 0;
      break;
    case "Recurrente":
      tarifa = 0.05;
      break;
    case "Antiguo Recurrente":
      tarifa = 0.05;
      break;
    case "Especial":
      tarifa = 0.09;
      break;
  }
  return tarifa;
}

export { PrecioNeto, ListaEstados, ImpuestoAplicado, Descuento, MensajeError, MensajeInvalido, PrecioTotal, ListaCategoria, ImpuestoCategoria, DescuentoCategoria, CostoEnvio, ListaTipoCliente, TipoCliente };