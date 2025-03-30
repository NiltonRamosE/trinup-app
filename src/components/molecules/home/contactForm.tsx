import { Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Nombre"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
        required
      />
      <Input
        label="Email"
        placeholder="tu@email.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
        required
      />
      <Textarea
        label="Mensaje"
        placeholder="¿En qué podemos ayudarte?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border-2 border-trinup-green rounded-xl font-extrabold mb-4"
        required
      />
      <Button
        type="submit"
        color="success"
        endContent={<Send size={16} />}
        className="w-full"
      >
        Enviar Mensaje
      </Button>
    </form>
  );
};