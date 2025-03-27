import { Input } from "@nextui-org/react";
import { Customer } from "@/lib/types/models/customer";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface CustomerInputProps {
  data: Customer;
  onChangeCustomer: (newData: Partial<Customer>) => void;
}

const CustomerInput: React.FC<CustomerInputProps> = ({
  data,
  onChangeCustomer,
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
        onChange={(e) => onChangeCustomer({ nombre: e.target.value })}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
      />
      <div className="grid grid-cols-2">
        <Input
          label="A. Paterno"
          type="text"
          value={data.apellidoPaterno}
          onChange={(e) => onChangeCustomer({ apellidoPaterno: e.target.value })}
          className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
        />
        <Input
          label="A. Materno"
          type="text"
          value={data.apellidoMaterno}
          onChange={(e) => onChangeCustomer({ apellidoMaterno: e.target.value })}
          className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4 ml-1"
        />
      </div>

      <Input
        label="Correo electrónico"
        placeholder="example@gmail.com"
        type="email"
        value={data.email}
        onChange={(e) => onChangeCustomer({ email: e.target.value })}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
      />

      <div className="grid grid-cols-2">
        <Input
          label="Contraseña"
          placeholder="******"
          type={isVisible ? "text" : "password"}
          value={data.password}
          onChange={(e) => onChangeCustomer({ password: e.target.value })}
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
          onChange={(e) => onChangeCustomer({ passwordConfirm: e.target.value })}
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

export default CustomerInput;
