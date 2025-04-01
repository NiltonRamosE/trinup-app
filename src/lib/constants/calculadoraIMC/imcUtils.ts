export const getRangoIMC = (index: number): string => {
  const rangos = [
    "Menos de 16.0",
    "16.0 – 16.99",
    "17.0 – 18.49",
    "18.5 – 24.9",
    "25.0 – 29.9",
    "30.0 – 34.9",
    "35.0 – 39.9",
    "40.0 o más",
  ];
  return rangos[index];
};

export const getClasificacion = (index: number): string => {
  const clasificaciones = [
    "Delgadez severa",
    "Delgadez moderada",
    "Delgadez leve",
    "Peso normal",
    "Sobrepeso",
    "Obesidad leve (Grado I)",
    "Obesidad media (Grado II)",
    "Obesidad mórbida (Grado III)",
  ];
  return clasificaciones[index] || "No definido";
};

export const getRiesgo = (index: number): string => {
  const riesgos = [
    "Aumento del riesgo",
    "Riesgo Alto",
    "Riesgo Moderado",
    "Riesgo Bajo",
    "Riesgo Moderado",
    "Riesgo Alto",
    "Riesgo Muy alto",
    "Riesgo Severo"
  ];
  return riesgos[index] || "Riesgo no estimado";
};

export const getIMCIndex = (imc: number): number => {
  if (imc < 16) return 0;
  if (imc < 16.99) return 1;
  if (imc < 18.49) return 2;
  if (imc < 24.9) return 3;
  if (imc < 29.9) return 4;
  if (imc < 34.9) return 5;
  if (imc < 39.9) return 6;
  return 7;
};

export const getBackgroundClass = (index: number): string => {
  const backgroundClasses = [
    "bg-cyan-50",
    "bg-teal-100",
    "bg-emerald-100",
    "bg-green-200",
    "bg-yellow-200",
    "bg-amber-200",
    "bg-orange-300",
    "bg-red-500",
  ];
  return backgroundClasses[index];
};
