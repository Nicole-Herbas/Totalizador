import { PrecioNeto, ListaEstados, ImpuestoAplicado, Descuento, MensajeError, MensajeInvalido, PrecioTotal, ListaCategoria, ImpuestoCategoria, DescuentoCategoria, CostoEnvio, TipoCliente, DescuentoTipoCliente, PrecioTotalFinal, ValidarDatos } from "./totalizador";

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
    expect(PrecioTotal(1000, 3, "Texas", "Varios")).toEqual(3037.5);
  });
});

describe("ListaCategoria", () => {
  it("Elegir la categoria del item de una lista desplegable", () => {
    expect(ListaCategoria()).toEqual(["Alimentos","Bebidas alcohólicas","Material de escritorio", "Muebles","Electrónicos","Vestimenta","Varios"]);
  });
});

describe("ImpuestoPorCategoria", () => {
  it("Calcular el impuesto aplicado a la compra por categoria", () => {
    expect(ImpuestoCategoria("Alimentos", 60)).toEqual(0);
    expect(ImpuestoCategoria("Bebidas alcohólicas", 60)).toEqual(4.2);
    expect(ImpuestoCategoria("Material de escritorio", 60)).toEqual(0);
    expect(ImpuestoCategoria("Muebles", 60)).toEqual(1.8);
    expect(ImpuestoCategoria("Electrónicos", 60)).toEqual(2.4);
    expect(ImpuestoCategoria("Vestimenta", 60)).toEqual(1.2);
    expect(ImpuestoCategoria("Varios", 60)).toEqual(0);
  });
});

describe("NuevoPrecioTotal", () => {
  it("Calcular el precio total de la compra sumando el precio neto, el impuesto por state, el impuesto por categoria y restando el descuento", () => {
    expect(PrecioTotal(1000, 3, "Texas", "Bebidas alcohólicas")).toEqual(3247.5);
    expect(PrecioTotal(1000, 3, "Texas", "Alimentos")).toEqual(3037.5);
    expect(PrecioTotal(1000, 3, "Texas", "Material de escritorio")).toEqual(3037.5);
    expect(PrecioTotal(1000, 3, "Texas", "Muebles")).toEqual(3127.5);
    expect(PrecioTotal(1000, 3, "Texas", "Electrónicos")).toEqual(3157.5);
    expect(PrecioTotal(1000, 3, "Texas", "Vestimenta")).toEqual(3097.5);
    expect(PrecioTotal(1000, 3, "Texas", "Varios")).toEqual(3037.5);
  });
});

describe("DescuentoPorCategoria", () => {
  it("Calcular el descuento aplicado a la compra por categoria", () => {
    expect(DescuentoCategoria("Alimentos", 1000)).toEqual(20);
    expect(DescuentoCategoria("Bebidas alcohólicas", 1000)).toEqual(0);
    expect(DescuentoCategoria("Material de escritorio", 1000)).toEqual(15);
    expect(DescuentoCategoria("Muebles", 1000)).toEqual(0);
    expect(DescuentoCategoria("Electrónicos", 1000)).toEqual(10);
    expect(DescuentoCategoria("Vestimenta", 1000)).toEqual(0);
    expect(DescuentoCategoria("Varios", 1000)).toEqual(0);
  });
});

describe("PesoVolumetrico", () => {
  it("El usuario puede ver el costo de envío de acuerdo al peso volumétrico que especifique el usuario", () => {
    expect(CostoEnvio(9, 2)).toEqual(0);
    expect(CostoEnvio(19, 1)).toEqual(3.5);
    expect(CostoEnvio(30, 2)).toEqual(10);
    expect(CostoEnvio(50, 1)).toEqual(6);
    expect(CostoEnvio(90, 1)).toEqual(6.5);
    expect(CostoEnvio(150, 1)).toEqual(8);
    expect(CostoEnvio(250, 1)).toEqual(9);
  });
});

describe("Tipo de cliente", () => {
  it("El usuario puede ver la aplicación de tarifas especiales para el costo de envio de acuerdo al tipo de client", () => {
    expect(TipoCliente(10, "Normal")).toEqual(0);
    expect(TipoCliente(10, "Recurrente")).toEqual(0.005);
    expect(TipoCliente(5, "Antiguo Recurrente")).toEqual(0.01);
    expect(TipoCliente(6, "Especial")).toEqual(0.015);
  });
});

describe("Descuento por tipo de cliente", () => {
  it("El usuario puede ver la aplicación de descuentos especiales de acuerdo al tipo de cliente, precio neto y categoria del producto", () => {
    expect(DescuentoTipoCliente(4000, "Recurrente", "Alimentos")).toEqual(100);
    expect(DescuentoTipoCliente(8000, "Especial", "Electrónicos")).toEqual(200);
  });
});

describe("Nuevo precio TOTAL", () => {

  it("Calcular el precio total final de la compra", () => {

    expect(
      PrecioTotalFinal(
        1000,
        3,
        "Texas",
        "Bebidas alcohólicas",
        30,
        "Recurrente"
      )
    ).toEqual(8202.63);

  });

});

describe("ValidarDatos", () => {
  it("rechaza informacion faltante", () => {
    expect(ValidarDatos("", 3, 10, "Texas", "Varios", "Normal"))
      .toBe("Por favor, complete todos los campos");
    expect(ValidarDatos(2, "", 10, "Texas", "Varios", "Normal"))
      .toBe("Por favor, complete todos los campos");
    expect(ValidarDatos(2, 3, "", "Texas", "Varios", "Normal"))
      .toBe("Por favor, complete todos los campos");
    expect(ValidarDatos(2, 3, 10, "", "Varios", "Normal"))
      .toBe("Por favor, complete todos los campos");
    expect(ValidarDatos(2, 3, 10, "Texas", "", "Normal"))
      .toBe("Por favor, complete todos los campos");
    expect(ValidarDatos(2, 3, 10, "Texas", "Varios", ""))
      .toBe("Por favor, complete todos los campos");
  });

  it("rechaza valores numericos invalidos", () => {
    expect(ValidarDatos(0, 3, 10, "Texas", "Varios", "Normal"))
      .toBe("La cantidad de items debe ser mayor que cero");
    expect(ValidarDatos(2, 0, 10, "Texas", "Varios", "Normal"))
      .toBe("El precio unitario debe ser mayor que cero");
    expect(ValidarDatos(2, 3, -1, "Texas", "Varios", "Normal"))
      .toBe("El peso volumetrico no puede ser negativo");
    expect(ValidarDatos("abc", 3, 10, "Texas", "Varios", "Normal"))
      .toBe("La cantidad de items debe ser un numero valido");
    expect(ValidarDatos(2, "abc", 10, "Texas", "Varios", "Normal"))
      .toBe("El precio unitario debe ser un numero valido");
    expect(ValidarDatos(2, 3, "abc", "Texas", "Varios", "Normal"))
      .toBe("El peso volumetrico debe ser un numero valido");
  });

  it("rechaza selecciones invalidas y cantidades fraccionarias", () => {
    expect(ValidarDatos(2.5, 3, 10, "Texas", "Varios", "Normal"))
      .toBe("La cantidad de items debe ser un numero entero");
    expect(ValidarDatos(2, 3, 10, "Atlantis", "Varios", "Normal"))
      .toBe("El estado seleccionado no es valido");
    expect(ValidarDatos(2, 3, 10, "Texas", "Desconocida", "Normal"))
      .toBe("La categoria seleccionada no es valida");
    expect(ValidarDatos(2, 3, 10, "Texas", "Varios", "Desconocido"))
      .toBe("El tipo de cliente seleccionado no es valido");
  });
});
