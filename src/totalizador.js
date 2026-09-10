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

function ValidarDatos(cantidad, precio, pesoVolumetrico, estado, categoria, tipoCliente) {
  if ([cantidad, precio, pesoVolumetrico, estado, categoria, tipoCliente]
    .some((valor) => valor === "" || valor === null || valor === undefined)) {
    return "Por favor, complete todos los campos";
  }

  if (!Number.isFinite(Number(cantidad))) {
    return "La cantidad de items debe ser un numero valido";
  }
  if (!Number.isFinite(Number(precio))) {
    return "El precio unitario debe ser un numero valido";
  }
  if (!Number.isFinite(Number(pesoVolumetrico))) {
    return "El peso volumetrico debe ser un numero valido";
  }
  if (Number(cantidad) <= 0) {
    return "La cantidad de items debe ser mayor que cero";
  }
  if (Number(precio) <= 0) {
    return "El precio unitario debe ser mayor que cero";
  }
  if (Number(pesoVolumetrico) < 0) {
    return "El peso volumetrico no puede ser negativo";
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
      tarifa = 0.005;
      break;
    case "Antiguo Recurrente":
      tarifa = 0.01;
      break;
    case "Especial":
      tarifa = 0.015;
      break;
  }
  return tarifa;
}

function DescuentoTipoCliente(precioNeto, tipo, categoria) {
  let descuento = 0;
  switch (tipo) {
    case "Recurrente":
      if (precioNeto > 3000 && categoria === "Alimentos") {
        descuento = 100;
      }
      break;
    case "Especial":
      if (precioNeto > 7000 && categoria === "Electrónicos") {
        descuento = 200;
      }
      break;
  }
  return descuento;
}

function PrecioTotalFinal(
  cantidad,
  precio,
  estado,
  categoria,
  pesoVolumetrico,
  tipoCliente
) {
  const neto = PrecioNeto(cantidad, precio);

  // Descuento general según el monto
  const descuento = Descuento(neto);

  // Descuento adicional por categoría
  const descuentoCategoria = DescuentoCategoria(categoria, neto);

  // Descuento fijo según tipo de cliente y categoría
  const descuentoTipoCliente = DescuentoTipoCliente(
    neto,
    tipoCliente,
    categoria
  );

  // Precio sobre el cual se calcula el impuesto
  const precioConDescuento =
    neto -
    descuento -
    descuentoCategoria -
    descuentoTipoCliente;

  // Impuesto estatal + impuesto adicional de categoría
  const impuesto = ImpuestoAplicado(estado, precioConDescuento);
  const impuestoCategoria = ImpuestoCategoria(
    categoria,
    precioConDescuento
  );

  // Costo de envío
  const costoEnvio = CostoEnvio(
    pesoVolumetrico,
    cantidad
  );

  // Descuento del cliente sobre el envío
  const descuentoEnvio =
    costoEnvio * TipoCliente(costoEnvio, tipoCliente);

  return Math.round(
    (
      precioConDescuento +
      impuesto +
      impuestoCategoria +
      costoEnvio -
      descuentoEnvio
    ) * 100
  ) / 100;
}

export { PrecioNeto, ListaEstados, ImpuestoAplicado, Descuento, MensajeError, MensajeInvalido, ValidarDatos, PrecioTotal, ListaCategoria, ImpuestoCategoria, DescuentoCategoria, CostoEnvio, ListaTipoCliente, TipoCliente, DescuentoTipoCliente, PrecioTotalFinal };