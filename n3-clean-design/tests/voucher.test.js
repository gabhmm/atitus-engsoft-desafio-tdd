import { calcularDesconto } from '../src/calculadoraVoucher.js';

describe('CalculadoraVoucher', () => {
  test('deve aplicar 10% de desconto para o cupom DEZ', () => {
    expect(calcularDesconto('DEZ', 100)).toBe(10);
  });

  test('deve aplicar 30% de desconto para o cupom TRINTA', () => {
    expect(calcularDesconto('TRINTA', 100)).toBe(30);
  });

  test('não deve aplicar desconto para cupons inválidos', () => {
    expect(calcularDesconto('INVALIDO', 100)).toBe(0);
  });

  test('não deve aplicar desconto quando nenhum cupom é fornecido', () => {
    expect(calcularDesconto('', 100)).toBe(0);
  });
});
