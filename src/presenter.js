import { PrecioNeto, ListaEstados } from "./totalizador.js";

const first = document.querySelector("#cantidad-items");
const second = document.querySelector("#precio-unitario");
const estado = document.querySelector("#codigo-estado");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#precio-neto");

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

  div.innerHTML = "<p>" + PrecioNeto(cantidad, precio) + "</p>";
});
