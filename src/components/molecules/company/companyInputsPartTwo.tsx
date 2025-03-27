import { Input } from "@nextui-org/react";
import { Company } from "@/lib/types/models/company";

interface CompanyInputProps {
  data: Company;
  onChangeOrg: (newData: Partial<Company>) => void;
}

export const CompanyInputAditional: React.FC<CompanyInputProps> = ({ data, onChangeOrg }) => {
  return (
    <div>
      <p className="mb-4 font-semibold">¡Infórmanos de cosas adicionales de tu empresa!</p>
      <Input
        label="Número de Sucursales"
        placeholder="Ingresa el número de sucursales"
        type="text"
        value={data.sucursales}
        onChange={(e) => onChangeOrg({ sucursales: e.target.value })}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
      />
    </div>
  );
};