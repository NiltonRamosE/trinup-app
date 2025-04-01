import React from "react";
import ColumnaIMC from "@/components/molecules/calculadoraIMC/columnaIMC";

interface TablaIMCProps {
  imc: number;
  riesgo: string;
  getIMCIndex: (imc: number) => number;
  getBorderClass: (index: number, rowType: string) => string;
}
  
const TablaIMC: React.FC<TablaIMCProps> = ({ imc, riesgo, getIMCIndex, getBorderClass }) => {
    return (
      <div className="grid grid-cols-4 xl:grid-cols-8 w-screen lg:w-auto gap-0">
        {[...Array(8)].map((_, index) => (
          <ColumnaIMC
            key={index}
            index={index}
            imc={imc}
            riesgo={riesgo}
            getIMCIndex={getIMCIndex}
            getBorderClass={getBorderClass}
          />
        ))}
      </div>
    );
  };
  
export default TablaIMC;