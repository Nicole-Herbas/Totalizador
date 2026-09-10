import { PrecioNeto, ListaEstados, ImpuestoAplicado, Descuento, MensajeError, MensajeInvalido, PrecioTotal } from "./totalizador";

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

describe("MensajeError", () => {
  it("Mostrar mensaje de error cuando se deja campos vacios", () => {
    expect(MensajeError("", 3, "Texas")).toBe("Por favor, complete todos los campos");
    expect(MensajeError(2, "", "Texas")).toBe("Por favor, complete todos los campos");
    expect(MensajeError(2, 3, "")).toBe("Por favor, complete todos los campos");
  });
});

describe("MensajeInválido", () => {
  it("Mostrar mensaje de error cuando se ingresa cantidades inválidas", () => {
    expect(MensajeInvalido(0, 3)).toBe("La cantidad de items no puede ser cero");
    expect(MensajeInvalido(2, 0)).toBe("El precio unitario no puede ser cero");
    expect(MensajeInvalido(-1, 3)).toBe("La cantidad de items debe ser un número positivo");
    expect(MensajeInvalido(2, -1)).toBe("El precio unitario debe ser un número positivo");
  });
});

describe("PrecioTotal", () => {
  it("Calcular el precio total de la compra sumando el precio neto, el impuesto y restando el descuento", () => {
    expect(PrecioTotal(1000, 3, "Texas")).toEqual(3037.5);
  });
});