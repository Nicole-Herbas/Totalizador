import { PrecioNeto, ListaEstados, ImpuestoAplicado, Descuento, MensajeError, MensajeInvalido, PrecioTotal, ListaCategoria, ImpuestoCategoria, DescuentoCategoria, CostoEnvio, ListaTipoCliente, TipoCliente } from "./totalizador.js";

const first = document.querySelector("#cantidad-items");
const second = document.querySelector("#precio-unitario");
const estado = document.querySelector("#codigo-estado");
const categoria = document.querySelector("#categoria-item");
const form = document.querySelector("#totalizar-form");
const PrecioNetoDiv = document.querySelector("#precio-neto");
const impuestoDiv = document.querySelector("#impuesto-aplicado");
const descuentoDiv = document.querySelector("#descuento-aplicado");
const precioTotalDiv = document.querySelector("#precio-total");
const mensajeErrorDiv = document.querySelector("#mensaje-error");
const impuestoCategoriaDiv = document.querySelector("#impuesto-categoria");
const descuentoCategoriaDiv = document.querySelector("#descuento-categoria");
const costoEnvioDiv = document.querySelector("#costo-envio");
const pesoVolumetrico = document.querySelector("#peso-volumetrico");
const tipoCliente = document.querySelector("#tipo-cliente");
const descuentoClienteDiv = document.querySelector("#descuento-cliente");
const tasasImpuesto = {
  Utah: 6.65,
  Nevada: 8,
  Texas: 6.25,
  Alabama: 4,
  California: 8.25,
};
const tasasDescuento = {
  1000: 3,
  3000: 5,
  7000: 7,
  10000: 10,
  30000: 15,
};
const tasasImpuestoCategoria = {
  "Alimentos": 0,
  "Bebidas alcohólicas": 10,
  "Material de escritorio": 5,
  "Muebles": 8,
  "Electrónicos": 12,
  "Vestimenta": 6,
  "Varios": 4,
};
const tasasDescuentoCategoria = {
  "Alimentos": 2,
  "Bebidas alcohólicas": 0,
  "Material de escritorio": 1.5,
  "Muebles": 0,
  "Electrónicos": 1,
  "Vestimenta": 0,
  "Varios": 0
};
const tasasTipoCliente = {
  "Normal": 0,
  "Recurrente": 0.5,
  "Antiguo Recurrente": 1,
  "Especial": 1.5
};

ListaEstados().forEach((nombreEstado) => {
  const opcion = document.createElement("option");
  opcion.value = nombreEstado;
  opcion.textContent = nombreEstado;
  estado.appendChild(opcion);
});

estado.value = "California";

ListaCategoria().forEach((nombreCategoria) => {
  const opcion = document.createElement("option");
  opcion.value = nombreCategoria;
  opcion.textContent = nombreCategoria;
  categoria.appendChild(opcion);
});

categoria.value = "Varios"; 

ListaTipoCliente().forEach((nombreTipoCliente) => {
  const opcion = document.createElement("option");
  opcion.value = nombreTipoCliente;
  opcion.textContent = nombreTipoCliente;
  tipoCliente.appendChild(opcion);
});

tipoCliente.value = "Normal";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const mensajeError = MensajeError(first.value, second.value, estado.value);
  const mensajeInvalido = MensajeInvalido(first.value, second.value);
  mensajeErrorDiv.textContent = mensajeError || mensajeInvalido;
  if (mensajeError || mensajeInvalido) return;

  const cantidad = Number.parseInt(first.value);
  const precio = Number.parseInt(second.value);
  const precioNeto = PrecioNeto(cantidad, precio);
  const impuesto = ImpuestoAplicado(estado.value, precioNeto);
  const descuento = Descuento(precioNeto);
  const impuestoCategoria = ImpuestoCategoria(categoria.value, precioNeto);
  const descuentoCategoria = DescuentoCategoria(categoria.value, precioNeto);
  const costoEnvio = CostoEnvio(Number.parseInt(pesoVolumetrico.value), cantidad);
  const descuentoCliente = TipoCliente(precioNeto, tipoCliente.value);

  PrecioNetoDiv.innerHTML = 
    "<p>Precio neto = $" + precioNeto + "</p>";
  descuentoDiv.innerHTML =
    "<p>Descuento " + tasasDescuento[Object.keys(tasasDescuento).find((k) => Number(k) <= precioNeto)] + "% = $" + descuento + "</p>";
  impuestoDiv.innerHTML =
    "<p>Impuesto para " + estado.value + " (" + tasasImpuesto[estado.value] + "%) = $" + impuesto + "</p>";
  impuestoCategoriaDiv.innerHTML =
    "<p>Impuesto para " + categoria.value + " (" + tasasImpuestoCategoria[categoria.value] + "%) = $" + impuestoCategoria + "</p>";
  descuentoCategoriaDiv.innerHTML =
    "<p>Descuento para " + categoria.value + " (" + tasasDescuentoCategoria[categoria.value] + "%) = $" + descuentoCategoria + "</p>";
  costoEnvioDiv.innerHTML =
    "<p>Costo de envío = $" + costoEnvio + "</p>";
  descuentoClienteDiv.innerHTML =
    "<p>Descuento para " + tipoCliente.value + " (" + tasasTipoCliente[tipoCliente.value] + "%) = $" + descuentoCliente + "</p>";
  precioTotalDiv.innerHTML =
    "<p>Precio total (descuento e impuesto) = $" + PrecioTotal(cantidad, precio, estado.value, categoria.value) + "</p>";
});
