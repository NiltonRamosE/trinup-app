import React from "react";

const MessageForm: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 md:p-12 lg:p-12 p-2 rounded-3xl shadow-2xl">
      <h2 className="text-xl font-bold mb-6">Escribe tu mensaje</h2>

      <form className="space-y-6">
        {/* Nombre y Apellido */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label htmlFor="nombre" className="block font-medium mb-1">
              Nombre<span className="text-red-500">*</span>
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="apellido" className="block font-medium mb-1">
              Apellido<span className="text-red-500">*</span>
            </label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="correo" className="block font-medium mb-1">
            Correo electrónico<span className="text-red-500">*</span>
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block font-medium mb-1">
            Teléfono<span className="text-red-500">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className="block font-medium mb-1">
            Mensaje<span className="text-red-500">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black resize-none"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
