export function calcularDesconto(codigo, valor) {
  const DESCONTOS = {
    'DEZ': 0.1,
    'TRINTA': 0.3
  };

  const percentual = DESCONTOS[codigo] || 0;
  return valor * percentual;
}
