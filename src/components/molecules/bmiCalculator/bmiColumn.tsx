import React from "react";
import { getBMIRange, getClassification, getBackgroundClass } from "@/lib/utils/bmi"

interface BMIColumnProps {
  index: number;
  bmi: number;
  risk: string;
  getBMIClassificationPosition: (bmi: number) => number;
  getBorderClass: (index: number, rowType: string) => string;
}

const BMIColumn: React.FC<BMIColumnProps> = ({ index, bmi, risk, getBMIClassificationPosition, getBorderClass }) => {
  return (
    <div className="flex flex-col justify-center text-center text-xs">

      <div className="flex justify-center font-semibold text-trinup-green pb-4">
        {getBMIClassificationPosition(bmi) === index && "Tu clasificación de IMC"}
      </div>

      <div className={`flex justify-center font-semibold p-4 items-center ${getBorderClass(index, "header")}`}>
        {getBMIRange(index)}
      </div>

      <div className={`flex justify-center sm:font-semibold h-24 items-center text-trinup-dark ${getBackgroundClass(index)} ${getBorderClass(index, "classification")}`}>
        {getClassification(index)}
      </div>

      <div className={`flex justify-center font-semibold text-trinup-green p-4 items-center ${getBorderClass(index, "risk")}`}>
        {getBMIClassificationPosition(bmi) === index && risk}
      </div>
    </div>
  );
};

export default BMIColumn;
