import { convertWeightToKg, getBMIClassificationPosition } from "./bmi";

export const calculateWaterIntake = (weight: number, bmi: number, weather: number, weightUnit: string): number => {
  const weightKg = convertWeightToKg(weight, weightUnit);
  const baseWater = weightKg * 0.035;
  const fitBMI = [1.2, 1.1, 1.05, 1, 0.95, 0.9, 0.85, 0.8][getBMIClassificationPosition(bmi)];
  return parseFloat((baseWater * fitBMI + weather).toFixed(2));
};

export const calculateGlassesOfWater = (liters: number): number => {
  return Math.ceil(liters / 0.25);
};