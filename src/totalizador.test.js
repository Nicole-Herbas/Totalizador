import { PrecioNeto, ListaEstados, ImpuestoAplicado } from "./totalizador";

describe("PrecioNeto", () => {
  it("Calcular el precio neto de la compra multiplicando la cantidad por el precio unitario", () => {
    expect(PrecioNeto(3, 2)).toEqual(6);
  });
});

describe("ListaEstados", () => {
  it("Elegir el estado de una lista desplegable para evitar errores al introducir los estados", () => {
    expect(ListaEstados()).toEqual(["Utah","Nevada","Texas", "Alabama","California"]);
  });
});

describe("ImpuestoAplicado", () => {
  it("Calcular el impuesto aplicado a la compra", () => {
    expect(ImpuestoAplicado("Texas", 60)).toEqual(3.75);
  });
});
