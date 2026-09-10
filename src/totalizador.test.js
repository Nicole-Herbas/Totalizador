import { PrecioNeto, ListaEstados, ImpuestoAplicado, Descuento } from "./totalizador";

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
    expect(ImpuestoAplicado("Utah", 60)).toEqual(3.99);
    expect(ImpuestoAplicado("Nevada", 60)).toEqual(4.8);
    expect(ImpuestoAplicado("Alabama", 60)).toEqual(2.4);
    expect(ImpuestoAplicado("California", 60)).toEqual(4.95);
  });
});

describe("Descuento", () => {
  it("Calcular el descuento aplicado a la compra", () => {
    expect(Descuento(1000)).toEqual(30);
    expect(Descuento(3000)).toEqual(150);
    expect(Descuento(7000)).toEqual(490);
    expect(Descuento(10000)).toEqual(1000);
    expect(Descuento(30000)).toEqual(4500);
  });
});