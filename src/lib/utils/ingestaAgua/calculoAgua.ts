import { getIMCIndex } from "@/lib/constants/calculadoraIMC/imcUtils";

export const convertirAlturaAMetros = (altura: number, unidad: string): number => {
  return unidad === "cm" ? altura / 100 : altura * 0.3048;
};

export const convertirPesoAKg = (peso: number, unidad: string): number => {
  return unidad === "kg" ? peso : peso * 0.453592;
};

export const calcularIMC = (peso: number, altura: number, alturaUnidad: string, pesoUnidad: string): number => {
  const alturaMetros = convertirAlturaAMetros(altura, alturaUnidad);
  const pesoKg = convertirPesoAKg(peso, pesoUnidad);
  return parseFloat((pesoKg / (alturaMetros * alturaMetros)).toFixed(1));
};

export const calcularIngestaAgua = (peso: number, imc: number, clima: number, pesoUnidad: string): number => {
  const pesoKg = convertirPesoAKg(peso, pesoUnidad);
  const baseAgua = pesoKg * 0.035;
  const ajusteIMC = [1.2, 1.1, 1.05, 1, 0.95, 0.9, 0.85, 0.8][getIMCIndex(imc)];
  return parseFloat((baseAgua * ajusteIMC + clima).toFixed(2));
};

export const calcularVasos = (litros: number): number => {
  return Math.ceil(litros / 0.25);
};