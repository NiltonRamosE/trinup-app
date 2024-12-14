import { Input } from "@nextui-org/react";
import { Cliente } from "@/models/cliente";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface DatosPersonalesProps {
  data: Cliente;
  onChangeClient: (newData: Partial<Cliente>) => void;
}

const DatosPersonales: React.FC<DatosPersonalesProps> = ({
  data,
  onChangeClient,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);
  return (
    <div>
      <p className="mb-4 font-semibold">Datos personales del Cliente:</p>
      <Input
        label="Nombre completo"
        placeholder="Ingresa tu nombre completo"
        type="text"
        value={data.nombre}
        onChange={(e) => onChangeClient({ nombre: e.target.value })}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
      />
      <div className="grid grid-cols-2">
        <Input
          label="A. Paterno"
          type="text"
          value={data.apellidoPaterno}
          onChange={(e) => onChangeClient({ apellidoPaterno: e.target.value })}
          className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
        />
        <Input
          label="A. Materno"
          type="text"
          value={data.apellidoMaterno}
          onChange={(e) => onChangeClient({ apellidoMaterno: e.target.value })}
          className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4 ml-1"
        />
      </div>

      <Input
        label="Correo electrónico"
        placeholder="example@gmail.com"
        type="email"
        value={data.email}
        onChange={(e) => onChangeClient({ email: e.target.value })}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
      />

      <div className="grid grid-cols-2">
        <Input
          label="Contraseña"
          placeholder="******"
          type={isVisible ? "text" : "password"}
          value={data.password}
          onChange={(e) => onChangeClient({ password: e.target.value })}
          className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
          endContent={
            <button type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <Eye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
        <Input
          label="Confirmar"
          placeholder="******"
          type={isVisible2 ? "text" : "password"}
          value={data.passwordConfirm}
          onChange={(e) => onChangeClient({ passwordConfirm: e.target.value })}
          className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4 ml-1"
          endContent={
            <button type="button" onClick={toggleVisibility2}>
              {isVisible2 ? (
                <EyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <Eye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
      </div>
    </div>
  );
};

export default DatosPersonales;
