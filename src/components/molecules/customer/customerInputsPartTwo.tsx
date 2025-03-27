import { Input } from "@nextui-org/react";
import { Customer } from "@/lib/types/models/customer";

interface CustomerDataProps {
  data: Customer;
  onChangeCustomer: (newData: Partial<Customer>) => void;
}

export const CustomerDataAditional: React.FC<CustomerDataProps> = ({ data, onChangeCustomer }) => {
  return (
    <div>
      <p className="mb-4 font-semibold">¡Infórmanos de tus aspectos de Salud!</p>
      <Input
        label="Peso"
        placeholder="Ingresa tu Peso"
        type="text"
        value={data.peso}
        onChange={(e) => onChangeCustomer({ peso: e.target.value })}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
      />
      <Input
        label="Talla"
        placeholder="Ingresa tu talla"
        type="text"
        value={data.talla}
        onChange={(e) => onChangeCustomer({ talla: e.target.value })}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
      />
    </div>
  );
};