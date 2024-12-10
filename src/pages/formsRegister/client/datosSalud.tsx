import { Input } from "@nextui-org/react";
import { Cliente } from "@/models/cliente";

interface DatosSaludProps {
  data: Cliente;
  onChange: (newData: Partial<Cliente>) => void;
}

const DatosSalud: React.FC<DatosSaludProps> = ({ data, onChange }) => {
  return (
    <div>
      <p className="mb-4 font-semibold">¡Infórmanos de tus aspectos de Salud!</p>
      <Input
        label="Peso"
        placeholder="Ingresa tu Peso"
        type="text"
        value={data.peso}
        onChange={(e) => onChange({ peso: e.target.value })}
        className="w-full mb-4"
      />
      <Input
        label="Talla"
        placeholder="Ingresa tu talla"
        type="text"
        value={data.talla}
        onChange={(e) => onChange({ talla: e.target.value })}
        className="w-full mb-4"
      />
    </div>
  );
};

export default DatosSalud;
