import PrecioNeto from "./Totalizador.js";

const first = document.querySelector("#cantidad-items");
const second = document.querySelector("#precio-unitario");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#precio-neto");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(first.value);
  const precio = Number.parseInt(second.value);

  div.innerHTML = "<p>" + PrecioNeto(cantidad, precio) + "</p>";
});
