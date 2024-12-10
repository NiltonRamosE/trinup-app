import { Input } from "@nextui-org/react";
import { Cliente } from "@/models/cliente";

interface DatosPersonalesProps {
  data: Cliente;
  onChange: (newData: Partial<Cliente>) => void;
}

const DatosPersonales: React.FC<DatosPersonalesProps> = ({ data, onChange }) => {
  return (
    <div>
      <p className="mb-4 font-semibold">Datos personales del Cliente:</p>
      <Input
        label="Nombre completo"
        placeholder="Ingresa tu nombre completo"
        type="text"
        value={data.nombre}
        onChange={(e) => onChange({ nombre: e.target.value })}
        className="w-full mb-4"
      />
      <Input
        label="Correo electrónico"
        placeholder="Ingresa tu correo"
        type="email"
        value={data.email}
        onChange={(e) => onChange({ email: e.target.value })}
        className="w-full mb-4"
      />
    </div>
  );
};

export default DatosPersonales;
