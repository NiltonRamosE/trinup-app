import { Input, Checkbox } from "@nextui-org/react";
import { Company } from "@/lib/types/models/company";
import { useState } from "react";

interface CompanyInputsProps {
  data: Company;
  onChangeOrg: (newData: Partial<Company>) => void;
}

export const CompanyInput: React.FC<CompanyInputsProps> = ({ data, onChangeOrg }) => {
  const [selectedPago, setSelectedPago] = useState<string | null>();

  const handlePagoChange = (value: string) => {
    setSelectedPago(selectedPago === value ? null : value);
    onChangeOrg({ pago: selectedPago === value ? null : value });
  };

  return (
    <div>
      <p className="mb-4 font-semibold">Datos empresariales:</p>
      <Input
        label="RUC"
        placeholder="Ingresa tu RUC"
        type="text"
        value={data.ruc}
        onChange={(e) => onChangeOrg({ ruc: e.target.value })}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
      />
      <Input
        label="Razón Social"
        placeholder="Ingresa la razón social"
        type="text"
        value={data.razonSocial}
        onChange={(e) => onChangeOrg({ razonSocial: e.target.value })}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
      />
      <div className="flex items-center gap-4 mt-4">
        <label className="font-medium text-xs">
          ¿Desea pagar la suscripción?
        </label>
        <div className="flex items-center gap-2">
          <Checkbox
            size="sm"
            className="mr-2"
            color="success"
            isSelected={selectedPago === "si"}
            onChange={() => handlePagoChange("si")}
          >
            Sí
          </Checkbox>
          <Checkbox
            size="sm"
            className="mr-2"
            color="success"
            isSelected={selectedPago === "no"}
            onChange={() => handlePagoChange("no")}
          >
            No
          </Checkbox>
        </div>
      </div>
    </div>
  );
};