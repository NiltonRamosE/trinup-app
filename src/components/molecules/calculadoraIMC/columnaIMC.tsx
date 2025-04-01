import React from "react";
import { getRangoIMC, getClasificacion, getBackgroundClass } from "@/lib/constants/calculadoraIMC/imcUtils"

interface ColumnaIMCProps {
  index: number;
  imc: number;
  riesgo: string;
  getIMCIndex: (imc: number) => number;
  getBorderClass: (index: number, rowType: string) => string;
}

const ColumnaIMC: React.FC<ColumnaIMCProps> = ({ index, imc, riesgo, getIMCIndex, getBorderClass }) => {
  return (
    <div className="flex flex-col justify-center text-center text-xs">
      {/* Marcador */}
      <div className="flex justify-center font-semibold text-trinup-green pb-4">
        {getIMCIndex(imc) === index && "Tu clasificación de IMC"}
      </div>

      {/* Rango de IMC */}
      <div className={`flex justify-center font-semibold p-4 items-center ${getBorderClass(index, "header")}`}>
        {getRangoIMC(index)}
      </div>

      {/* Clasificación */}
      <div className={`flex justify-center sm:font-semibold h-24 items-center ${getBackgroundClass(index)} ${getBorderClass(index, "classification")}`}>
        {getClasificacion(index)}
      </div>

      {/* Riesgo */}
      <div className={`flex justify-center font-semibold text-trinup-green p-4 items-center ${getBorderClass(index, "risk")}`}>
        {getIMCIndex(imc) === index && riesgo}
      </div>
    </div>
  );
};

export default ColumnaIMC;
