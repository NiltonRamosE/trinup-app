import React from "react";

const FloatingBanner: React.FC = () => {
  return (
    <div className="w-[128%] overflow-hidden bg-[#19ee65] py-2">
      <div className="whitespace-nowrap animate-marquee font-medium text-black text-center text-sm md:text-base">
        <span className="inline-block px-4">
          ¿Aún con dudas? 🫣 ¿Deseas saber más de nosotros? 🤔 Tranquilo, puedes contactarnos 🥲 o llamarnos 😎
        </span>
        <span className="inline-block px-4">
          ¿Aún con dudas? 🫣 ¿Deseas saber más de nosotros? 🤔 Tranquilo, puedes contactarnos 🥲 o llamarnos 😎
        </span>
        {/* Puedes repetir más si quieres que el loop sea más largo */}
      </div>
    </div>
  );
};

export default FloatingBanner;
