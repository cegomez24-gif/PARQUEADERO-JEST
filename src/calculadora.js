const TARIFA_HORA = 3000;
const TASA_EQUIPO = 8; // N = 8 -> (8 mod 5) + 5 = 8

function validarEntradas(horas, esNocturno) {
  if (typeof horas !== "number" || Number.isNaN(horas)) return false;
  if (horas <= 0) return false;
  if (typeof esNocturno !== "boolean") return false;
  return true;
}

function calcularCobro(horas, esNocturno = false) {
  if (!validarEntradas(horas, esNocturno)) {
    throw new Error("Entradas inválidas");
  }
  const base = horas * TARIFA_HORA;
  if (esNocturno) {
    return base + (base * TASA_EQUIPO) / 100;
  }
  return base;
}

module.exports = { calcularCobro, validarEntradas };
