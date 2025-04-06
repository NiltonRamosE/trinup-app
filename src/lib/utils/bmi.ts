export const convertHeightToMeters = (height: number, unit: string): number => {
  return unit === "cm" ? height / 100 : height * 0.3048;
};

export const convertWeightToKg = (weight: number, unit: string): number => {
  return unit === "kg" ? weight : weight * 0.453592;
};

export const calculateBMI = (weight: number, height: number, heightUnit: string, weightUnit: string): number => {
  const heightInMeters = convertHeightToMeters(height, heightUnit);
  const weightKg = convertWeightToKg(weight, weightUnit);
  return parseFloat((weightKg / (heightInMeters * heightInMeters)).toFixed(1));
};

export const getBMIRange = (index: number): string => {
  const ranges = [
    "Menos de 16.0",
    "16.0 – 16.99",
    "17.0 – 18.49",
    "18.5 – 24.9",
    "25.0 – 29.9",
    "30.0 – 34.9",
    "35.0 – 39.9",
    "40.0 o más",
  ];
  return ranges[index];
};

export const getClassification = (index: number): string => {
  const classifications = [
    "Delgadez severa",
    "Delgadez moderada",
    "Delgadez leve",
    "Peso normal",
    "Sobrepeso",
    "Obesidad leve (Grado I)",
    "Obesidad media (Grado II)",
    "Obesidad mórbida (Grado III)",
  ];
  return classifications[index] || "No definido";
};

export const getRisk= (index: number): string => {
  const risks = [
    "Aumento del riesgo",
    "Riesgo Alto",
    "Riesgo Moderado",
    "Riesgo Bajo",
    "Riesgo Moderado",
    "Riesgo Alto",
    "Riesgo Muy alto",
    "Riesgo Severo"
  ];
  return risks[index] || "Riesgo no estimado";
};

export const getBMIClassificationPosition = (bmi: number): number => {
  if (bmi < 16) return 0;
  if (bmi < 16.99) return 1;
  if (bmi < 18.49) return 2;
  if (bmi < 24.9) return 3;
  if (bmi < 29.9) return 4;
  if (bmi < 34.9) return 5;
  if (bmi < 39.9) return 6;
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
