const { calcularCobro } = require("./calculadora");

describe("calcularCobro", () => {
  // ---- 3 casos normales ----
  test("cobra 2 horas diurnas sin recargo", () => {
    // Arrange
    const horas = 2;
    // Act
    const resultado = calcularCobro(horas, false);
    // Assert
    expect(resultado).toBe(6000);
  });

  test("aplica tasaEquipo (8%) en 2 horas nocturnas", () => {
    // Arrange
    const horas = 2;
    // Act
    const resultado = calcularCobro(horas, true);
    // Assert
    expect(resultado).toBe(6480); // 6000 + 8% = 6480
  });

  test("aplica tasaEquipo (8%) en 5 horas nocturnas", () => {
    // Arrange
    const horas = 5;
    // Act
    const resultado = calcularCobro(horas, true);
    // Assert
    expect(resultado).toBe(16200); // 15000 + 8% = 16200
  });

  // ---- 3 casos borde ----
  test("lanza error si las horas son 0", () => {
    // Arrange
    const horas = 0;
    // Act + Assert
    expect(() => calcularCobro(horas, false)).toThrow("Entradas inválidas");
  });

  test("lanza error si las horas son negativas", () => {
    // Arrange
    const horas = -3;
    // Act + Assert
    expect(() => calcularCobro(horas, true)).toThrow("Entradas inválidas");
  });

  test("lanza error si las horas no son un número", () => {
    // Arrange
    const horas = "dos";
    // Act + Assert
    expect(() => calcularCobro(horas, false)).toThrow("Entradas inválidas");
  });
});
