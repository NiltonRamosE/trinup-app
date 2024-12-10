import { Input } from "@nextui-org/react";
import { Empresa } from "@/models/empresa";

interface DatosEmpresaProps {
  data: Empresa;
  onChange: (newData: Partial<Empresa>) => void;
}

const DatosEmpresa: React.FC<DatosEmpresaProps> = ({ data, onChange }) => {
  return (
    <div>
      <p className="mb-4 font-semibold">Datos empresariales:</p>
      <Input
        label="RUC"
        placeholder="Ingresa tu RUC"
        type="text"
        value={data.ruc}
        onChange={(e) => onChange({ ruc: e.target.value })}
        className="w-full mb-4"
      />
      <Input
        label="Razón Social"
        placeholder="Ingresa la razón social"
        type="text"
        value={data.razonSocial}
        onChange={(e) => onChange({ razonSocial: e.target.value })}
        className="w-full mb-4"
      />
      <div className="flex items-center gap-4 mt-4">
        <label className="font-medium">¿Desea pagar la suscripción?</label>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="pago"
            id="si"
            value="si"
            checked={data.pago === "si"}
            onChange={() => onChange({ pago: "si" })}
          />
          <label htmlFor="si">Sí</label>
          <input
            type="radio"
            name="pago"
            id="no"
            value="no"
            checked={data.pago === "no"}
            onChange={() => onChange({ pago: "no" })}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
    </div>
  );
};

export default DatosEmpresa;
