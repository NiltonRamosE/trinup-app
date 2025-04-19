import React from "react";
import BMIColumn from "@/components/molecules/bmiCalculator/bmiColumn";

interface BMITableProps {
  bmi: number;
  risk: string;
  getBMIClassificationPosition: (bmi: number) => number;
  getBorderClass: (index: number, rowType: string) => string;
}
  
const BMITable: React.FC<BMITableProps> = ({ bmi, risk, getBMIClassificationPosition, getBorderClass }) => {
    return (
      <div className="grid grid-cols-4 xl:grid-cols-8 w-screen lg:w-auto gap-0">
        {[...Array(8)].map((_, index) => (
          <BMIColumn
            key={index}
            index={index}
            bmi={bmi}
            risk={risk}
            getBMIClassificationPosition={getBMIClassificationPosition}
            getBorderClass={getBorderClass}
          />
        ))}
      </div>
    );
  };
  
export default BMITable;