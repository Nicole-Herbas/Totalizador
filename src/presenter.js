import { PrecioNeto, ListaEstados, ImpuestoAplicado, Descuento } from "./totalizador.js";

const first = document.querySelector("#cantidad-items");
const second = document.querySelector("#precio-unitario");
const estado = document.querySelector("#codigo-estado");
const form = document.querySelector("#totalizar-form");
const PrecioNetoDiv = document.querySelector("#precio-neto");
const impuestoDiv = document.querySelector("#impuesto-aplicado");
const descuentoDiv = document.querySelector("#descuento-aplicado");
const tasasImpuesto = {
  Utah: 6.65,
  Nevada: 8,
  Texas: 6.25,
  Alabama: 4,
  California: 8.25,
};

ListaEstados().forEach((nombreEstado) => {
  const opcion = document.createElement("option");
  opcion.value = nombreEstado;
  opcion.textContent = nombreEstado;
  estado.appendChild(opcion);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(first.value);
  const precio = Number.parseInt(second.value);
  const precioNeto = PrecioNeto(cantidad, precio);
  const impuesto = ImpuestoAplicado(estado.value, precioNeto);
  const descuento = Descuento(precioNeto);

  PrecioNetoDiv.innerHTML = 
    "<p>Precio neto = " + precioNeto + "</p>";
  descuentoDiv.innerHTML =
    "<p>Descuento = " + descuento + "</p>";
  impuestoDiv.innerHTML =
    "<p>Impuesto para " + estado.value + " (" + tasasImpuesto[estado.value] + "%) = " + impuesto + "</p>";
});
